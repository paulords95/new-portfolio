import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";

import "./CardColumn.css";

const CardColumn = () => {
  return (
    <div className="column-card-container">
      <div className="column-info"></div>
      <div className="column-screen">
        <Card className="card-wrap">
          <CardMedia
            className="media"
            image="https://raw.githubusercontent.com/paulords95/novadax-app/main/screenshots/Screenshot_20210409-150539_Dax%20API.jpg"
          />
        </Card>
      </div>
    </div>
  );
};

export default CardColumn;
