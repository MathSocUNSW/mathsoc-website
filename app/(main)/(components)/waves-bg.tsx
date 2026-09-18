"use client";

import React, { useEffect, useRef } from "react";

const pi2 = 2 * Math.PI;

interface WavesOptions {
  rotation: number;
  waves: number;
  width: number;
  amplitude: number;
  speed: [number, number];
}

const defaultWavesOptions: WavesOptions = {
  rotation: 45,
  waves: 5,
  width: 100,
  amplitude: 0.5,
  speed: [0.005, 0.012],
};

function rnd(min: number, max?: number): number {
  return max === undefined ? Math.random() * min : min + Math.random() * (max - min);
}

function rndSign(): number {
  return Math.random() > 0.5 ? 1 : -1;
}

class Line {
  public angle: number[];
  public color: string;
  constructor(wave: WaveInstance, color: string) {
    this.angle = wave.angle.map((_, i) => Math.sin((wave.angle[i] += wave.speed[i])));
    this.color = color;
  }
}

class WaveInstance {
  public angle: number[];
  public speed: number[];
  public lines: Line[] = [];

  constructor(public waves: WavesClass) {
    this.angle = [rnd(pi2), rnd(pi2), rnd(pi2), rnd(pi2)];
    this.speed = this.angle.map(() => rnd(this.waves.options.speed[0], this.waves.options.speed[1]) * rndSign());
  }

  public update() {
    this.lines.push(new Line(this, this.waves.color));
    if (this.lines.length > this.waves.options.width) this.lines.shift();
  }

  public draw(ctx: CanvasRenderingContext2D) {
    const { centerX, centerY, radius, options } = this.waves;
    const rotation = (options.rotation * Math.PI) / 180;
    const amplitude = options.amplitude;
    const radius3 = radius / 3;
    
    ctx.strokeStyle = this.waves.color;
    ctx.beginPath();
    this.lines.forEach((line) => {
      const angle = line.angle;
      
      const x1 = centerX - radius * Math.cos(angle[0] * amplitude + rotation);
      const y1 = centerY - radius * Math.sin(angle[0] * amplitude + rotation);
      const x2 = centerX + radius * Math.cos(angle[3] * amplitude + rotation);
      const y2 = centerY + radius * Math.sin(angle[3] * amplitude + rotation);
      
      const cpx1 = centerX - radius3 * Math.cos(angle[1] * amplitude * 2);
      const cpy1 = centerY - radius3 * Math.sin(angle[1] * amplitude * 2);
      const cpx2 = centerX + radius3 * Math.cos(angle[2] * amplitude * 2);
      const cpy2 = centerY + radius3 * Math.sin(angle[2] * amplitude * 2);
      
      ctx.moveTo(x1, y1);
      ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
    });
    ctx.stroke();
  }
}

class WavesClass {
  public options: WavesOptions;
  public waves: WaveInstance[] = [];
  public holder: HTMLElement;
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public width = 0;
  public height = 0;
  public radius = 0;
  public centerX = 0;
  public centerY = 0;
  public color = "rgba(0, 0, 255, 0.27)";
  private frameId: number | null = null;
  private resizeObserver = new ResizeObserver(() => this.resize());
  // Only animate while the waves are on screen
  private visibilityObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) this.start();
    else this.stop();
  });

  constructor(holder: HTMLElement, userOptions: Partial<WavesOptions>) {
    this.options = { ...defaultWavesOptions, ...userOptions };
    this.holder = holder;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;
    this.holder.appendChild(this.canvas);
    this.init();
    // Fires once on observe, which sets the initial canvas size
    this.resizeObserver.observe(this.holder);
    this.visibilityObserver.observe(this.holder);
  }

  public init() {
    for (let i = 0; i < this.options.waves; i++) {
      this.waves.push(new WaveInstance(this));
    }
  }

  public animate = () => {
    this.render();
    this.frameId = requestAnimationFrame(this.animate);
  };

  public start() {
    if (this.frameId === null) this.frameId = requestAnimationFrame(this.animate);
  }

  public stop() {
    if (this.frameId !== null) cancelAnimationFrame(this.frameId);
    this.frameId = null;
  }

  public destroy() {
    this.stop();
    this.resizeObserver.disconnect();
    this.visibilityObserver.disconnect();
    this.canvas.remove();
  }

  public render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.waves.forEach((wave) => {
      wave.update();
      wave.draw(this.ctx);
    });
  }

  public resize() {
    this.width = this.holder.offsetWidth;
    this.height = this.holder.offsetHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.radius = Math.sqrt(this.width ** 2 + this.height ** 2) / 2;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
  }
}

const Wave: React.FC<{ rotation?: number }> = ({ rotation = 45 }) => {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const waves = new WavesClass(holderRef.current!, { rotation });
    return () => waves.destroy();
  }, [rotation]);

  return <div ref={holderRef} style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden", background: "transparent" }} />;
};

export default Wave;
