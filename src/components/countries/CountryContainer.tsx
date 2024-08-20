import React, { useState } from "react";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";

function CountryContainer() {
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelection = (value: string) => {
    setSelection(value);
  };

  return (
    <>
      <div className="country-container flex h-full p-4">
        <CountryList onSelect={handleSelection}></CountryList>
        <CountryDetail selected={selection}></CountryDetail>
      </div>
    </>
  );
}

export default CountryContainer;
