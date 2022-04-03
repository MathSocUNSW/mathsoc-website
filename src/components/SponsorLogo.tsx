import React, { useEffect, useState } from "react";
import styles from "../styles/SponsorsLogo.module.scss";

const getLogoClass = (height: number, width: number): string => {
  const aspectRatio = width / height;
  if (aspectRatio <= 3 / 2) {
    return styles.logoSquare;
  } else if (aspectRatio <= 8) {
    return styles.logoHorizontal;
  } else {
    return styles.logoLongHorizontal;
  }
};
interface SponsorLogoProps {
  name: string;
  logoPath: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name, logoPath }) => {
  const [logoClass, setLogoClass] = useState(styles.logoSquare);
  useEffect(() => {
    const logo = new Image();
    logo.src = logoPath;
    logo.onload = (e) => {
      setLogoClass(getLogoClass(logo.naturalHeight, logo.naturalWidth));
    };
  }, [logoPath]);
  return <img src={logoPath} alt={`${name}'s logo`} className={`${styles.logo} ${logoClass}`} />;
};

export default SponsorLogo;
