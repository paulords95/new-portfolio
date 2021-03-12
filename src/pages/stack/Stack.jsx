import React from "react";

import "./stack.css";

//svgs
import { ReactComponent as JavaScript } from "../../assets/svgs/javascript.svg";
import { ReactComponent as ReactLogo } from "../../assets/svgs/react.svg";
import { ReactComponent as ReactNative } from "../../assets/svgs/react-native.svg";
import { ReactComponent as NodeJs } from "../../assets/svgs/nodejs.svg";
import { ReactComponent as PostgreSQL } from "../../assets/svgs/postgresql.svg";
import { ReactComponent as Css3 } from "../../assets/svgs/css3.svg";

const StackPage = () => {
  return (
    <div className="stack-page-container">
      <div className="title-stack-wrap">
        <h1 className="title-stack">Meu Stack</h1>
        <hr />
      </div>
      <div className="stack-items-wrap">
        <div className="js-item-container">
          <JavaScript />
          <h3>JavaScript</h3>
        </div>
        <div className="react-item-container">
          <ReactLogo />
          <h3>React</h3>
        </div>
        <div className="react-native-item-container">
          <ReactNative />
          <h3>React Native</h3>
        </div>
        <div className="nodejs-item-container">
          <NodeJs />
          <h3>Node.js</h3>
        </div>
        <div className="postgresql-item-container">
          <PostgreSQL />
          <h3>PostgreSQL</h3>
        </div>
        <div className="css3-item-container">
          <Css3 />
          <h3>CSS3</h3>
        </div>
      </div>
    </div>
  );
};

export default StackPage;
