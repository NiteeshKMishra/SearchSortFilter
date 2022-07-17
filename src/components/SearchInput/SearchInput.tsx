import React, { ChangeEvent, useEffect, useState } from "react";

import useDebounce from "../../hooks/useDebounce";

import "./SearchInput.css";

interface SearchInputProps {
  label: string;
  reset: boolean;
  onSearch: (searchStr: string) => void;
}

function SearchInput(props: SearchInputProps) {
  const { label, reset, onSearch } = props;
  const [searchStr, setSearchStr] = useState<string>("");

  const debouncedValue = useDebounce<string>(searchStr, 1000);

  useEffect(() => {
    setSearchStr("");
  }, [reset]);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className="search-input">
      <label htmlFor="search-input" className="search-input_label">
        {label}
      </label>
      <input
        id="search-input"
        value={searchStr}
        placeholder="Search for anything..."
        className="search-input_input"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchStr(e.target.value)
        }
      />
    </div>
  );
}

export default SearchInput;
