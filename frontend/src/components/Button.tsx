import React from "react";
import { Typography } from "@material-ui/core";

/* My own imports */
import styles from "src/styles/button.module.scss";
import { resourceDetails as buttonProps } from "src/data/resourceData";

/* 
- do we need rel="noreferrer" for an internal link?
- what typography varient should I be using? How can I check the different styles? 
(I've just arbitarily picked h2)
*/
const Button: React.FC<buttonProps> = ({
    title,
    resourceLink,
    iconPath
}) => {
    return (
        <div className={styles.button}>
            <a href={resourceLink}  target="_blank" rel="noreferrer"> 
                <Typography variant="h2" className={styles.title}> {title} </Typography>
                <img src={iconPath} className={styles.icon} alt="" />
            </a>
        </div>
    );
}
