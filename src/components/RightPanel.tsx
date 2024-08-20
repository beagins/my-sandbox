import React, { useEffect, useState } from "react";
import "./RightPanel.scss";
import { CountryDetail } from "../interfaces/countries.interface";
import { CircularProgress } from "@mui/material";

interface RightPanelProps {
  selected: string | null;
}

const RightPanel: React.FC<RightPanelProps> = ({ selected }) => {
  const detailUrl: string = "https://restcountries.com/v2/name/";
  const [detail, setDetail] = useState<CountryDetail | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${detailUrl}${selected}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDetail(response[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [detailUrl, selected, setDetail]);

  return (
    <>
      <div className="right-panel p-4">
        <div className="App">
          {loading && <CircularProgress />}
          {!loading && !detail && <span>To begin, select a country.</span>}
          {!loading && detail && (
            <div className="right-panel">
              <table>
                <tr>
                  <td className="label">Name:</td>
                  <td className="value">{detail?.name}</td>
                </tr>
                <tr>
                  <td className="label">Capital:</td>
                  <td className="value">{detail?.capital}</td>
                </tr>
                <tr>
                  <td className="label">Flag:</td>
                  <td className="value">
                    <img src={detail?.flags?.svg} width="50" height="25" />
                  </td>
                </tr>
                <tr>
                  <td className="label">Languages:</td>
                  <td className="value">
                    <ul>
                      {detail?.languages.map((language) => {
                        return <li>{language?.name}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="label">Population:</td>
                  <td className="value">{detail?.population}</td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightPanel;
