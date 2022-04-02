// Library Imports
import React from "react";
// import Image from "next/image";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/EventCard.module.scss";

// Data
import { EventDetails } from "src/data/eventData";
import { linkData as socials } from "src/data/socialData";
import { formatDisplayDate } from "src/helpers/eventHelpers";

const EventCard: React.FC<EventDetails> = ({
  eventName,
  eventDescription,
  eventImage,
  imageDescription,
  eventLink,
  locationLabel,
  locationLink,
  startTime,
  endTime
}) => {
  // adds link to keywords
  const linker = (location: string) => {
    if (!location) return "";

    // split location string by whitespace but keep the space
    // https://stackoverflow.com/a/26425713
    const linked = location.split(/(\s+)/).map((substring: string, index: number) => {
      for (const { name, url } of socials) {
        // wrap with link if a substring matches social data
        if (substring === name) {
          return (
            <a key={`${eventName}-${index}`} href={url} target="_blank" rel="noopener noreferrer">
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
        <a href={eventLink} target="_blank" rel="noopener noreferrer">
          <img src={`https://${eventImage}`} className={styles.topImage} alt={imageDescription} />
        </a>
      </div>
      <div className={styles.content}>
        <div className="mainContent">
          <a href={eventLink} target="_blank" rel="noopener noreferrer" className={styles.title}>
            <Typography variant="h5">{eventName}</Typography>
          </a>
          <div className={styles.description}>
            {/* NOTE: Typography introduces a weird bug with MacOS browsers */}
            {/* <Typography variant="body1">{description}</Typography> */}
            <p>{eventDescription}</p>
          </div>
          <ul>
            <li>
              <Typography variant="body2">Date: {formatDisplayDate(startTime, endTime)}</Typography>
            </li>
            <li>
              <Typography variant="body2">
                Location:{" "}
                {locationLink ? (
                  <a href={locationLink} target="_blank" rel="noopener noreferrer">
                    {locationLabel}
                  </a>
                ) : (
                  linker(locationLabel)
                )}
              </Typography>
            </li>
          </ul>
        </div>
        <div className={styles.link}>
          <a href={eventLink} target="_blank" rel="noopener noreferrer">
            <p>Find out more &#8594;</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
