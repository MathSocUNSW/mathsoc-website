import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/SponsorsLogo.module.scss";

import { LogoStyle } from "../data/sponsorsData";
import { Height } from "@material-ui/icons";

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
  logoStyle: LogoStyle;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name, logoPath, logoStyle }) => {
  const [logoClass, setLogoClass] = useState("");
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
