"use client";

import React, { useEffect } from "react";

/**
 * Type-safe options for the Waves class.
 */
interface WavesOptions {
  resize: boolean;
  rotation: number;
  waves: number;
  width: number;
  hue: [number, number];
  amplitude: number;
  background: boolean;
  preload: boolean;
  speed: [number, number];
  debug: boolean;
}

/**
 * Default options for the waves.
 */
const defaultWavesOptions: WavesOptions = {
  resize: true,
  rotation: 45,
  waves: 5, // Increased overlap
  width: 100, // Higher density
  hue: [14, 14], // Smooth color transitions
  amplitude: 0.5, // Increased curvature
  background: false,
  preload: true,
  speed: [0.005, 0.012], // Faster animation
  debug: false,
};

/**
 * Merges user-provided options with default options.
 */
function extend<T>(options: Partial<T>, defaults: T): T {
  return { ...defaults, ...options };
}

/**
 * Converts degrees to radians.
 */
function dtr(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Generates a random float between two values.
 */
function rnd(min: number, max?: number): number {
  return max === undefined ? Math.random() * min : min + Math.random() * (max - min);
}

/**
 * Returns either +1 or -1 randomly.
 */
function rndSign(): number {
  return Math.random() > 0.5 ? 1 : -1;
}

/**
 * Individual line in a wave.
 */
class Line {
  public angle: number[];
  public color: string;

  constructor(wave: WaveInstance, color: string) {
    this.angle = wave.angle.map((a, i) => Math.sin((wave.angle[i] += wave.speed[i])));
    this.color = color;
  }
}

/**
 * Represents an individual wave.
 */
class WaveInstance {
  public angle: number[];
  public speed: number[];
  public lines: Line[] = [];

  constructor(public waves: WavesClass) {
    this.angle = [rnd(Math.PI * 2), rnd(Math.PI * 2), rnd(Math.PI * 2), rnd(Math.PI * 2)];
    this.speed = [
      rnd(this.waves.options.speed[0], this.waves.options.speed[1]) * rndSign(),
      rnd(this.waves.options.speed[0], this.waves.options.speed[1]) * rndSign(),
      rnd(this.waves.options.speed[0], this.waves.options.speed[1]) * rndSign(),
      rnd(this.waves.options.speed[0], this.waves.options.speed[1]) * rndSign(),
    ];
  }

  public update() {
    this.lines.push(new Line(this, this.waves.color));
    if (this.lines.length > this.waves.options.width) {
      this.lines.shift();
    }
  }

  public draw() {
    const { ctx, radius, centerX, centerY, options } = this.waves;
    const rotation = dtr(options.rotation);
    const amplitude = options.amplitude;
    const radius3 = radius / 3; // Used for Bézier curves

    for (const line of this.lines) {
      const angle = line.angle;

      // Control points for smoother waves
      const x1 = centerX - radius * Math.cos(angle[0] * amplitude + rotation);
      const y1 = centerY - radius * Math.sin(angle[0] * amplitude + rotation);
      const x2 = centerX + radius * Math.cos(angle[3] * amplitude + rotation);
      const y2 = centerY + radius * Math.sin(angle[3] * amplitude + rotation);

      const cpx1 = centerX - radius3 * Math.cos(angle[1] * amplitude * 2);
      const cpy1 = centerY - radius3 * Math.sin(angle[1] * amplitude * 2);
      const cpx2 = centerX + radius3 * Math.cos(angle[2] * amplitude * 2);
      const cpy2 = centerY + radius3 * Math.sin(angle[2] * amplitude * 2);

      ctx.strokeStyle = options.debug ? "#fff" : line.color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
      ctx.stroke();
    }
  }
}

/**
 * The main Waves animation class.
 */
class WavesClass {
  public options: WavesOptions;
  public waves: WaveInstance[] = [];
  public holder: HTMLElement;
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public hue: number;
  public hueFw: boolean = true;
  public width = 0;
  public height = 0;
  public radius = 0;
  public centerX = 0;
  public centerY = 0;
  public color = "#000";

  constructor(holder: string, userOptions: Partial<WavesOptions>) {
    this.options = extend(userOptions, defaultWavesOptions);

    const element = document.querySelector(holder);
    if (!element) throw new Error(`Element '${holder}' not found.`);
    this.holder = element as HTMLElement;

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;
    this.holder.appendChild(this.canvas);
    this.hue = this.options.hue[0];

    this.resize();
    this.init(this.options.preload);
    if (this.options.resize) window.addEventListener("resize", this.resize.bind(this), false);
  }

  public init(preload: boolean) {
    for (let i = 0; i < this.options.waves; i++) {
      this.waves.push(new WaveInstance(this));
    }
    if (preload) this.preload();
  }

  public preload() {
    for (const wave of this.waves) {
      this.updateColor();
      for (let j = 0; j < this.options.width; j++) {
        wave.update();
      }
    }
  }

  public render() {
    this.updateColor();
    this.clear();
    if (this.options.background) {
      this.background();
    }
    this.waves.forEach((wave) => {
      wave.update();
      wave.draw();
    });
  }

  public animate() {
    this.render();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  public clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  public background() {
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, "#020817");
    gradient.addColorStop(1, this.color);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  public resize() {
    this.width = this.holder.offsetWidth * (window.devicePixelRatio || 1);
    this.height = this.holder.offsetHeight * (window.devicePixelRatio || 1);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.radius = Math.sqrt(this.width ** 2 + this.height ** 2) / 2;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
  }

  public updateColor() {
    this.hue += this.hueFw ? 0.01 : -0.01;
    if (this.hue > this.options.hue[1]) this.hueFw = false;
    if (this.hue < this.options.hue[0]) this.hueFw = true;

    const a = Math.floor(127 * Math.sin(0.3 * this.hue) + 128);
    const b = Math.floor(127 * Math.sin(0.3 * this.hue + 2) + 128);
    const c = Math.floor(127 * Math.sin(0.3 * this.hue + 4) + 128);
    this.color = `rgba(${a},${b},${c}, 0.1)`;
  }
}

const Wave: React.FC<{ containerId?: string; rotation?: number }> = ({ containerId = "wave-holder", rotation = 45 }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const wavesInstance = new WavesClass(`#${containerId}`, { rotation });
    wavesInstance.animate();
  }, [containerId, rotation]);

  return <div id={containerId} style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }} />;
};

export default Wave;
