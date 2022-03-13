import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/SponsorsLogo.module.scss";

const SQUARE_MIN_THRESHOLD = 5 / 6;
const SQUARE_MAX_THRESHOLD = 6 / 5;
const WIDE_THRESHOLD = 7;

interface SponsorLogoProps {
  name: string;
  logoPath: string;
}
const SponsorLogo: React.FC<SponsorLogoProps> = ({ name, logoPath }) => {
  const logoRef = useRef<HTMLImageElement>(null);
  const [logoClass, setLogoClass] = useState("");
  useEffect(() => {
    const image = logoRef.current as HTMLImageElement;
    const aspectRatio = image.clientWidth / image.clientHeight;
    if (SQUARE_MIN_THRESHOLD <= aspectRatio && aspectRatio <= SQUARE_MAX_THRESHOLD) {
      setLogoClass(styles.logoSquare);
    } else if (SQUARE_MAX_THRESHOLD < aspectRatio && aspectRatio <= WIDE_THRESHOLD) {
      setLogoClass(styles.logoHorizontal);
    } else {
      setLogoClass(styles.logoLongHorizontal);
    }
  }, []);
  return (
    <img
      ref={logoRef}
      src={logoPath}
      alt={`${name}'s logo`}
      className={`${styles.logo} ${logoClass}`}
    ></img>
  );
};

export default SponsorLogo;
