import React, { ChangeEvent, useMemo } from "react";

import { SelectOption, SortType } from "../../types/common";
import Person from "../../types/person";
import Product from "../../types/product";

import "./SortInput.css";

interface SortInputProps {
  label: string;
  options: Array<keyof (Person | Product)>;
  onOptionSelect: (
    option: keyof (Person | Product),
    sortType: SortType
  ) => void;
}

function SortInput(props: SortInputProps) {
  const { label, options, onOptionSelect } = props;

  const selectOptions: SelectOption[] = useMemo(() => {
    const tempSelectOptions: SelectOption[] = [];
    options.forEach((option) => {
      tempSelectOptions.push(
        {
          label: `Sort by ${String(option)[0].toUpperCase()}${String(option)
            .slice(1)
            .toLowerCase()} Asc`,
          value: option.toString(),
          sortType: "ascending",
        },
        {
          label: `Sort by ${String(option)[0].toUpperCase()}${String(option)
            .slice(1)
            .toLowerCase()} Desc`,
          value: option.toString(),
          sortType: "descending",
        }
      );
    });
    return tempSelectOptions;
  }, [options]);

  const handleSelectValueChange = (selectedIndex: number) => {
    const selectedOption = selectOptions[selectedIndex];
    if (selectedOption) {
      onOptionSelect(
        selectedOption.value as keyof (Person | Product),
        selectedOption.sortType!
      );
    }
  };

  return (
    <div className="sort-input">
      <label htmlFor="sort-input" className="sort-input_label">
        {label}
      </label>
      <select
        id="sort-input"
        className="sort-input_select"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleSelectValueChange(e.target.selectedIndex)
        }
      >
        {selectOptions.map((selectOption) => (
          <option value={selectOption.value} key={selectOption.label}>
            {selectOption.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortInput;
