// Library Imports
import React from "react";

// Styling
import styles from "src/styles/YTEmbed.module.scss";

interface embedProps {
  embedURL: string;
}

export const YTEmbed: React.FC<embedProps> = ({ embedURL }) => {
  return (
    <div className={styles.embedContainer}>
      <div className={styles.youtubeWrapper}>
        <div className={styles.youtube}>
          <iframe
            src={embedURL}
            width="560"
            height="315"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
