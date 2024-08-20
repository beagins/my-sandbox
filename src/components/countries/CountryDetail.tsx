import React, { useEffect, useState } from "react";
import { CountryDetailItem } from "../../interfaces/countries.interface";
import { CircularProgress } from "@mui/material";

interface CountryDetailProps {
  selected: string | null;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ selected }) => {
  const detailUrl: string = "https://restcountries.com/v2/name/";
  const [detail, setDetail] = useState<CountryDetailItem | null>();
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
      <div className="country-detail p-4">
        <div className="App">
          {loading && <CircularProgress />}
          {!loading && !detail && <span>To begin, select a country.</span>}
          {!loading && detail && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
