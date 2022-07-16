import React, { ChangeEvent } from "react";

import "./SearchInput.css";

interface SearchInputProps {
  label: string;
  onSearch: (searchStr: string) => void;
}

function SearchInput(props: SearchInputProps) {
  const { label, onSearch } = props;

  return (
    <div className="search-input">
      <label htmlFor="search-input" className="search-input_label">
        {label}
      </label>
      <input
        id="search-input"
        placeholder="Start searching..."
        className="search-input_input"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchInput;
