import React from "react";
import Carousel from "nuka-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./CardColumn.css";

const CardColumn = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap-reverse",
      }}
    >
      <div className="column-card-container">
        <div className="column-screen">
          <Carousel
            wrapAround
            defaultControlsConfig={{
              nextButtonText: <ArrowForwardIosIcon />,
              prevButtonText: <ArrowBackIosIcon />,
              pagingDotsStyle: {
                fill: "grey",
              },
            }}
          >
            <img
              alt="1"
              src="https://raw.githubusercontent.com/paulords95/novadax-app/main/Screenshot_20210409-150530_Dax%20API.jpg"
            />

            <img
              alt="2"
              src="https://raw.githubusercontent.com/paulords95/novadax-app/main/Screenshot_20210409-150539_Dax%20API.jpg"
            />
            <img
              alt="3"
              src="https://raw.githubusercontent.com/paulords95/novadax-app/main/Screenshot_20210409-150547_Dax%20API.jpg"
            />
            <img
              alt="4"
              src="https://raw.githubusercontent.com/paulords95/novadax-app/main/Screenshot_20210409-150551_Dax%20API.jpg"
            />
          </Carousel>
        </div>
      </div>
      <div className="column-info">
        <h3>Dax App - React Native, Node.js e PostgreSQL</h3>
        <p>
          Monitora preço e regitra em banco dados PostgreSQL, faz consultas na
          API da carteira da NovaDAX e calcula porcentagem e valor de patrimônio
        </p>
      </div>
    </div>
  );
};

export default CardColumn;
