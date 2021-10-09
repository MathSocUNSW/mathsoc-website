// Library imports
import React from "react";
import { Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

// Components
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";

// Styling
import styles from "src/styles/competitions.module.scss";

const Competitions: React.FC<{}> = () => {
  return (
    <div>
      <PageBody>
        <div className={styles.competitions}>
          <WholePageBox>
            <Typography variant="h2" align="center">
              Integration Bee
            </Typography>
            <Typography align="center">Coming Soon</Typography>
          </WholePageBox>
          <WholePageBox>
            <Typography variant="h2" align="center">
              Accelerate
            </Typography>
            <Carousel className={styles.carousel}>
              <img src="https://google.com" />
              <img src="https://google.com" />
              <img src="https://google.com" />
            </Carousel>
            <Typography>
              Congratulations to Austin Zhang for being the winner to our 2021 Accelerate event! The
              problem set (with solutions) can be found{" "}
              <a
                href="files/competitions/accelerate-2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Typography>
          </WholePageBox>
        </div>
      </PageBody>
    </div>
  );
};
export default Competitions;
