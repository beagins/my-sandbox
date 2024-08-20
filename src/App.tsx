import React, { useState } from "react";

import "./App.scss";

import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelection = (value: string) => {
    setSelection(value);
  };

  return (
    <>
      <div className="app-body">
        <HeaderBar></HeaderBar>
        <div className="main-content">
          <LeftPanel onSelect={handleSelection}></LeftPanel>
          <RightPanel selected={selection}></RightPanel>
        </div>
        <FooterBar></FooterBar>
      </div>
    </>
  );
}

export default App;
