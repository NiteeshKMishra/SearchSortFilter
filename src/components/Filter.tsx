import React, { ChangeEvent, useMemo, useState } from "react";

import { SelectOption } from "../types/common";
import Person from "../types/person";
import Product from "../types/product";

import "./Filter.css";

interface FilterProps {
  property: keyof (Product | Person);
  options: string[];
  onFilter: (property: keyof (Product | Person), values: string[]) => void;
}

function Filters(props: FilterProps) {
  const { property, options, onFilter } = props;
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const selectOptions: SelectOption[] = useMemo(() => {
    return options
      .filter((option) => !!option)
      .map((option) => ({
        label: `${option[0].toUpperCase()}${option.slice(1).toLowerCase()}`,
        value: option,
      }));
  }, [options]);

  const handleFilterSelect = (value: string) => {
    let tempSelectOptions = [...selectedOptions];
    if (selectedOptions.includes(value)) {
      tempSelectOptions = tempSelectOptions.filter(
        (option) => option === value
      );
    } else {
      tempSelectOptions.push(value);
    }
    setSelectedOptions(tempSelectOptions);
    onFilter(property, tempSelectOptions);
  };

  return (
    <div className="filter">
      <label htmlFor="filter" className="filter_label">
        Filter by{" "}
        {`${String(property)[0].toUpperCase()}${String(property)
          .slice(1)
          .toLowerCase()}`}
      </label>
      <select
        id="filter"
        className="filter_select"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleFilterSelect(e.target.value)
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

export default Filters;
