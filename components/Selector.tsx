import styled from "styled-components";
import Select from "react-select";
import { Option } from "../lib/useSelect";
import { Dispatch, SetStateAction } from "react";

type SelectorProps = {
  options: Option[];
  onSetSelectedOption: Dispatch<SetStateAction<Option>>;
  selectedOption: Option;
};

export default function Selector({
  options,
  onSetSelectedOption,
  selectedOption,
}: SelectorProps): JSX.Element {
  return (
    <StyledSelect
      onChange={(option) => onSetSelectedOption(option as Option)}
      options={options}
      value={selectedOption.value !== null && selectedOption}
      styles={{
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "rgba(217, 217, 217, 1)",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused ? "black" : "rgba(217, 217, 217, 1)",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: "rgba(217, 217, 217, 1)",
        }),
      }}
    />
  );
}

const StyledSelect = styled(Select)`
  z-index: 1001;

  && > * {
    background-color: rgba(50, 50, 50, 1);
  }
`;
