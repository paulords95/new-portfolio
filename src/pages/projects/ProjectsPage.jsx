import React from "react";

import "./projectspage.css";

import "aos/dist/aos.css";

import { ReactComponent as DesignLogo } from "../../assets/svgs/code-design.svg";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CardColumn from "../../components/CardColumn/CardColumn";

const ProjectsPage = () => {
  return (
    <div className="projects-pg-container">
      <div className="title-projects-wrap">
        <h1 className="title-projects">Meus Projetos</h1>
        <hr />
      </div>
      <div className="svg-wave-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7673f9"
            fill-opacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,90.7C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="projects-body">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="design-log-wrap"
        >
          <DesignLogo />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="column-card-item"
        >
          <CardColumn />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="project-card-item"
        >
          <ProjectCard />
        </div>
      </div>
      <div className="svg-bottom-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#7673f9"
            fill-opacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,90.7C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ProjectsPage;
