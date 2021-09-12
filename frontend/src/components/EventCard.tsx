// Library Imports
import React from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/EventCard.module.scss";

// Data
import { eventDetails as EventCardProps } from "src/data/eventData";
import { socials } from "src/data/socialData";

const EventCard: React.FC<EventCardProps> = ({
  title,
  eventLink,
  description,
  imagePath,
  location,
  locationURL,
  date
}) => {
  // adds link to keywords
  const linker = (location: string) => {
    if (!location) return "";

    // split location string by whitespace but keep the space
    // https://stackoverflow.com/a/26425713
    const linked = location.split(/(\s+)/).map((substring: string) => {
      for (const { name, url } of socials) {
        // wrap with link if a substring matches social data
        if (substring === name) {
          return (
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          );
        }
      }
      return substring;
    });
    return linked;
  };

  return (
    <div className={styles.card}>
      <div>
        <a href={eventLink} target="_blank" rel="noreferrer">
          {/* <div className={styles.imageContainer}>
            <Image
              src={imagePath}
              className={styles.image}
              alt="banner"
              layout="fill"
              priority={true}
              quality={25}
            />
          </div> */}
          <img src={imagePath} className={styles.topImage} alt="event banner" />
        </a>
      </div>
      <div className={styles.content}>
        <div className="mainContent">
          <a href={eventLink} target="_blank" rel="noreferrer" className={styles.title}>
            <Typography variant="h5">{title}</Typography>
          </a>
          <div className={styles.description}>
            {/* NOTE: Typography introduces a weird bug with MacOS browsers */}
            {/* <Typography variant="body1">{description}</Typography> */}
            <p>{description}</p>
          </div>
          <ul>
            <li>
              <Typography variant="body2">Date: {date}</Typography>
            </li>
            <li>
              <Typography variant="body2">
                Location:{" "}
                {locationURL ? (
                  <a href={locationURL} target="_blank" rel="noreferrer">
                    {location}
                  </a>
                ) : (
                  linker(location)
                )}
              </Typography>
            </li>
          </ul>
        </div>
        <div className={styles.link}>
          <a href={eventLink} target="_blank" rel="noreferrer">
            <p>Find out more &#8594;</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
