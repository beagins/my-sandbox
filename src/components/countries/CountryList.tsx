import React, { useEffect, useState } from "react";
import { CountryListItem } from "../../interfaces/countries.interface";

interface CountryListProps {
  onSelect: (value: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ onSelect }) => {
  const listUrl: string = "https://restcountries.com/v2/all?fields=name";
  const [countries, setCountries] = useState<CountryListItem[]>([]);
  const [filter, setFilter] = useState<string | null>();

  const handleSelect: (value: string) => void = (value: string) => {
    onSelect(value);
  };

  useEffect(() => {
    fetch(listUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCountries(response);
      });
  }, [listUrl, setCountries]);

  return (
    <>
      <div className="country-list flex flex-col h-full p-4">
        <input
          className="mb-4"
          placeholder="Search"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilter(event.target.value);
          }}
        />
        <div className="overflow-y-scroll">
          {countries
            .filter((country) => {
              return filter
                ? country?.name.toLowerCase().includes(filter.toLowerCase())
                : country;
            })
            .map((country) => {
              return (
                <div key={country.name} className="country">
                  <a
                    onClick={() => {
                      handleSelect(country.name);
                    }}
                  >
                    {country.name}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CountryList;
