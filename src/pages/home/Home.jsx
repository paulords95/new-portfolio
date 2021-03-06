import React, { useEffect, useRef } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { ReactComponent as CodeSvg } from "../../assets/svgs/programming.svg";
import { ReactComponent as CodeThink } from "../../assets/svgs/codeThink.svg";
import { ReactComponent as ScrollSvg } from "../../assets/svgs/scroll.svg";

import Aos from "aos";
import "aos/dist/aos.css";

import "./home.css";

const Home = () => {
  const logoContainer = useRef(null);
  const logoWrap = useRef(null);
  const github = useRef(null);
  const linkedin = useRef(null);
  const scrollLogo = useRef(null);

  window.onscroll = function () {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      logoContainer.current.style.marginTop = "45vh";
      logoContainer.current.style.marginLeft = "40%";

      scrollLogo.current.style.opacity = "0";
      logoContainer.current.style.transform = "rotate(90deg";
      github.current.style.transform = "rotate(-90deg";
      linkedin.current.style.transform = "rotate(-90deg";
    } else {
      scrollLogo.current.style.opacity = "1";
      logoContainer.current.style.marginLeft = "0%";
      logoContainer.current.style.marginTop = "10px";
      logoContainer.current.style.transform = "rotate(0deg";
      github.current.style.transform = "rotate(0deg";
      linkedin.current.style.transform = "rotate(0deg";
    }
  };

  useBottomScrollListener(() => {
    logoContainer.current.style.marginTop = "50vh";

    logoContainer.current.style.marginLeft = "0%";
    logoContainer.current.style.transform = "rotate(0deg";
    github.current.style.transform = "rotate(0deg";
    linkedin.current.style.transform = "rotate(0deg";
  });

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="home-wrap">
      <div ref={logoContainer} className="logo-container">
        <div ref={logoWrap} className="logos-wrap">
          <svg
            onClick={() => {
              let url = "https://github.com/paulords95";
              const win = window.open(url, "_blank");
              win.focus();
            }}
            className="github"
            ref={github}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <svg
            onClick={() => {
              let url = "https://www.linkedin.com/in/paulo-ricardo-97360573/";
              const win = window.open(url, "_blank");
              win.focus();
            }}
            className="linkedin"
            ref={linkedin}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
      </div>
      <div className="home-top">
        <div className="title-wrap">
          <h1 className="title">Paulo Ricardo</h1>
          <hr />
          <h3 className="subtitle">Desenvolvedor de Softwares</h3>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" className="code-wrap">
        <CodeSvg />
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="code-think-wrap"
      >
        <CodeThink />
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
        <div ref={scrollLogo} className="scroll-position">
          <ScrollSvg />
        </div>
      </div>
    </div>
  );
};

export default Home;
