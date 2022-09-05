import React from "react";
import { Select } from "@chakra-ui/react";
import data from "../../utils/states_and_lgas.json";

const StateSelect = () => {
  return (
    <Select
      placeholder="Select State"
      textColor="txt.muted"
      iconColor="txt.primary"
    >
      {data.map(({ state, alias }) => (
        <option value={alias} key={alias}>
          {state}
        </option>
      ))}
    </Select>
  );
};

const LgaSelect = () => {
  const state = "";
  const { lgas = [] } = data?.find(({ alias }) => alias === state) || {
    lgas: [],
  };
  return (
    <Select placeholder="Local govt area">
      {lgas?.map(lga => (
        <option value={lga.toLowerCase()} key={lga.toLowerCase()}>
          {lga}
        </option>
      ))}
    </Select>
  );
};

export { StateSelect, LgaSelect };
