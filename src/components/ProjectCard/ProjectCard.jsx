import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";

import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-info"></div>
      <div className="project-screen">
        <Card>
          <CardMedia
            className="media"
            image="https://raw.githubusercontent.com/paulords95/novadax-app/main/screenshots/Screenshot_20210409-150539_Dax%20API.jpg"
          />
        </Card>
        aaa
      </div>
    </div>
  );
};

export default ProjectCard;
