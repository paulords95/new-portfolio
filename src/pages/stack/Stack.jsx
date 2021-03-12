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
        </div>
        <div className="react-item-container">
          <ReactLogo />
        </div>
        <div className="react-native-item-container">
          <ReactNative />
        </div>
        <div className="nodejs-item-container">
          <NodeJs />
        </div>
        <div className="postgresql-item-container">
          <PostgreSQL />
        </div>
        <div className="css3-item-container">
          <Css3 />
        </div>
      </div>
    </div>
  );
};

export default StackPage;
