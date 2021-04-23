import React from "react";
import Carousel from "nuka-carousel";

import "./CardColumn.css";

import LogoLinks from "./LogoLink/LogoLinks";

const CardColumn = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div className="column-card-container">
        <div className="column-screen">
          <Carousel
            wrapAround
            autoplay
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              pagingDotsStyle: {
                fill: "grey",
                borderRadius: "5px",
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
      <LogoLinks />
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
