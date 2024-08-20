import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./FooterBar.scss";
import { Tooltip } from "@mui/material";

function FooterBar() {
  return (
    <>
      <div className="footer-bar flex justify-end p-2">
        <a className="mx-2" href="https://github.com/beagins" target="_blank">
          <Tooltip title="GitHub">
            <GitHubIcon />
          </Tooltip>
        </a>
        <a
          className="mx-2"
          href="https://www.linkedin.com/in/shannonbeagin/"
          target="_blank"
        >
          <Tooltip title="LinkedIn">
            <LinkedInIcon />
          </Tooltip>
        </a>
      </div>
    </>
  );
}

export default FooterBar;
