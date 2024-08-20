import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import "./LeftPanel.scss";
import { Tooltip } from "@mui/material";

function LeftPanel() {
  return (
    <>
      <div className="left-panel flex flex-col content-center p-4">
        <a className="flex justify-center">
          <Tooltip title="Countries" placement="right">
            <PublicIcon />
          </Tooltip>
        </a>
      </div>
    </>
  );
}

export default LeftPanel;
