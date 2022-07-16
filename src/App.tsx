import React, { useEffect, useState, useCallback, useMemo } from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SortInput from "./components/SortInput";
import Filter from "./components/Filter";
import PersonCard from "./components/PersonCard";
import ProductCard from "./components/ProductCard";
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";
import genericFilter from "./utils/genericFilter";
import { ItemType, SortType } from "./types/common";
import Person, { PersonFilterKeys } from "./types/person";
import Product, { ProductFilterKeys } from "./types/product";
import { persons } from "./data/persons";
import { products } from "./data/products";

import "./App.css";

function App() {
  const [selectedType, setSelectedType] = useState<ItemType>("person");
  const [data, setData] = useState<Array<Product | Person>>([]);
  const [filterKeys, setFilterKeys] = useState<Array<keyof (Product | Person)>>(
    []
  );

  useEffect(() => {
    if (selectedType === "person") {
      setData(persons);
      setFilterKeys(
        PersonFilterKeys as unknown as Array<keyof (Product | Person)>
      );
    } else {
      setData(products);
      setFilterKeys(
        ProductFilterKeys as unknown as Array<keyof (Product | Person)>
      );
    }
  }, [selectedType]);

  const dataKeys = useMemo(() => {
    return persons.length && products.length
      ? (Object.keys(
          selectedType === "person" ? persons[0] : products[0]
        ).filter((key) => key !== "id" && key !== "image") as Array<
          keyof (Person | Product)
        >)
      : [];
  }, [selectedType]);

  const getFilterOptions = useCallback(
    (key: keyof (Product | Person)) => {
      const filterValues: string[] = [];
      (selectedType === "person" ? persons : products).forEach((data) => {
        const filterValue = data[key];
        if (!filterValues.includes(filterValue)) {
          filterValues.push(filterValue);
        }
      });
      return filterValues;
    },
    [selectedType]
  );

  const onSearch = useCallback(
    (searchStr: string) => {
      const newData = genericSearch<Person | Product>(
        data,
        dataKeys,
        searchStr
      );
      setData(newData);
    },
    [data, dataKeys]
  );

  const onSort = useCallback(
    (option: keyof (Person | Product), sortType: SortType) => {
      const newData = genericSort<Person | Product>(
        data,
        option,
        sortType === "descending"
      );
      setData(newData);
    },
    [data]
  );

  const onFilter = useCallback(
    (property: keyof (Product | Person), values: string[]) => {
      const newData = genericFilter<Person | Product>(data, property, values);
      setData(newData);
    },
    [data]
  );

  return (
    <>
      <Header
        selectedType={selectedType}
        onItemClick={(itemType) => setSelectedType(itemType)}
      />
      <div className="search-sort-filter-container">
        <SearchInput label={`Search ${selectedType}s`} onSearch={onSearch} />
        <SortInput
          label={`Sort ${selectedType}s`}
          options={dataKeys}
          onOptionSelect={onSort}
        />
      </div>
      <div className="search-sort-filter-container">
        {filterKeys.map((filterKey) => (
          <Filter
            key={`filter-key-${filterKey}`}
            options={getFilterOptions(filterKey)}
            property={filterKey}
            onFilter={onFilter}
          />
        ))}
      </div>
      <div className="person-product-container">
        {data.map((currentData) =>
          selectedType === "person" ? (
            <PersonCard person={currentData as Person} key={currentData.id} />
          ) : (
            <ProductCard
              product={currentData as Product}
              key={currentData.id}
            />
          )
        )}
      </div>
    </>
  );
}

export default App;
