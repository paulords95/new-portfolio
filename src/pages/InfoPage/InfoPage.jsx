import React from "react";

import "./infopage.css";

const InfoPage = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className="infopage-container"
    >
      <div className="info-projects-wrap">
        <h1 className="info-projects">Contato</h1>
        <hr className="title-line" />
      </div>
      <div data-aos="fade-right" data-aos-duration="800" className="info-wrap">
        <h3 className="email">contato@paulo.dev.br</h3>
        <hr />
      </div>
      <div className="year-wrap">
        <h4>2021</h4>
      </div>
    </div>
  );
};

export default InfoPage;
