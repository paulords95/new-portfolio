import React from "react";

import "./projectspage.css";

import "aos/dist/aos.css";

import { ReactComponent as DesignLogo } from "../../assets/svgs/code-design.svg";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="projects-pg-container">
      <div className="title-projects-wrap">
        <h1 className="title-projects">Meus Projetos</h1>
        <hr />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="design-log-wrap"
      >
        <DesignLogo />
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
          className="project-card-item"
        >
          <ProjectCard />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="project-card-item"
        >
          <ProjectCard />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1420 320"
          preserveAspectRatio="none"
        >
          <path
            class="bottom-wave"
            fill="#fbfbfe"
            fill-opacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,181.3C672,224,768,256,864,250.7C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ProjectsPage;
