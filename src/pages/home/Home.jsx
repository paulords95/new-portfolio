import React from "react";
import { ReactComponent as CodeSvg } from "../../assets/svgs/programming.svg";
import { ReactComponent as CodeThink } from "../../assets/svgs/codeThink.svg";
import { ReactComponent as ScrollSvg } from "../../assets/svgs/scroll.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-wrap">
      <div className="home-top">
        <div className="title-wrap">
          <h1 className="title">Paulo Ricardo</h1>
          <hr />
          <h3 className="subtitle">Desenvolvedor de Softwares</h3>
        </div>
      </div>
      <div className="code-wrap">
        <CodeSvg />
      </div>
      <div className="code-think-wrap">
        <CodeThink />
      </div>
      <div className="scroll-wrap">
        <div
          className="scroll-position"
          style={{ position: "absolute", bottom: "3em", zIndex: 3, width: 30 }}
        >
          <ScrollSvg />
        </div>
      </div>
      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1420 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fbfbfe"
            fill-opacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,181.3C672,224,768,256,864,250.7C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
