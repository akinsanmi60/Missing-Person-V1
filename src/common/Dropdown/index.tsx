import { Select } from "@chakra-ui/react";
import FormField from "common/FormField";
import React from "react";
import FormWrap from "./style";

type DropProp = {
  lotData: string[];
  defaultPlaceholder: string;
  labelValue: string;
};
function Dropdown({ lotData, defaultPlaceholder, labelValue }: DropProp) {
  const loadData = lotData.sort((a, b) => (a > b ? 1 : -1));

  return (
    <div>
      <FormWrap>
        <FormField label={labelValue}>
          <Select placeholder={defaultPlaceholder}>
            {loadData.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormField>
      </FormWrap>
    </div>
  );
}

export default Dropdown;
