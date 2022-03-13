import React, { useCallback, useState } from "react";
import styles from "../styles/SponsorsLogo.module.scss";

import { LogoStyle } from "../data/sponsorsData";
interface SponsorLogoProps {
  name: string;
  logoPath: string;
  logoStyle: LogoStyle;
}
const SponsorLogo: React.FC<SponsorLogoProps> = ({ name, logoPath, logoStyle }) => {
  let logoClass;
  if (logoStyle == LogoStyle.SQUARE) {
    logoClass = styles.logoSquare;
  } else if (logoStyle == LogoStyle.HORIZONTAL) {
    logoClass = styles.logoHorizontal;
  } else {
    logoClass = styles.logoLongHorizontal;
  }
  {
    /*
    // The code works locally but not in production.
    // The cause is that getBoundingClientRect().width and height are both valid when reloading pages
    // but are both 0 when switching between them in production. The issue is not reproducible locally.
    // The temporary fix is to state the style of the logo in sponsorsData.ts
  const [logoClass, setLogoClass] = useState("");
  const logoRef = useCallback((logo: HTMLImageElement | null) => {
    if (logo !== null) {
      const logoImage = logo as HTMLImageElement;
      const aspectRatio = logoImage.getBoundingClientRect().width/ logoImage.getBoundingClientRect().height;
      if (SQUARE_MIN_THRESHOLD <= aspectRatio && aspectRatio <= SQUARE_MAX_THRESHOLD) {
        setLogoClass(styles.logoSquare);
      } else if (SQUARE_MAX_THRESHOLD < aspectRatio && aspectRatio <= WIDE_THRESHOLD) {
        setLogoClass(styles.logoHorizontal);
      } else {
        setLogoClass(styles.logoLongHorizontal);
      }
    }
  }, []);
*/
  }
  return (
    <img src={logoPath} alt={`${name}'s logo`} className={`${styles.logo} ${logoClass}`}></img>
  );
};

export default SponsorLogo;
