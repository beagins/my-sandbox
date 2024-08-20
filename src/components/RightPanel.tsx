import React from "react";
import "./RightPanel.scss";
import CountryContainer from "./countries/CountryContainer";

function RightPanel() {
  return (
    <>
      <div className="right-panel p-4">
        <CountryContainer />
      </div>
    </>
  );
}

export default RightPanel;
