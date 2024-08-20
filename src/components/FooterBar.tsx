import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./FooterBar.scss";

function FooterBar() {
  return (
    <>
      <div className="footer-bar flex justify-end p-2">
        <a className="mx-2" href="https://github.com/beagins" target="_blank">
          <GitHubIcon></GitHubIcon>
        </a>
        <a
          className="mx-2"
          href="https://www.linkedin.com/in/shannonbeagin/"
          target="_blank"
        >
          <LinkedInIcon></LinkedInIcon>
        </a>
      </div>
    </>
  );
}

export default FooterBar;
