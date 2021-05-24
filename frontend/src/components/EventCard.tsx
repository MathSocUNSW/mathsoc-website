import React from "react";
import styles from "src/styles/EventCard.module.scss";
import { eventDetails as EventCardProps } from "src/data/eventData";
import { Typography } from "@material-ui/core";
import { socials } from "src/data/socialData";
import Image from "next/image";

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
  const linker = (location) => {
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
          <div className={styles.imageContainer}>
            <Image
              src={imagePath}
              className={styles.image}
              alt="banner"
              layout="fill"
              priority={true}
              quality={25}
            />
          </div>
          {/* <img src={imagePath} className={styles.topImage} alt="event banner" /> */}
        </a>
      </div>
      <div className={styles.content}>
        <div className="mainContent">
          <Typography variant="h5">{title}</Typography>
          <div className={styles.description}>
            <Typography variant="body1">{description}</Typography>
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
