import React, { useEffect, useState, useCallback, useMemo } from "react";
import { AutoSizer, List } from "react-virtualized";

import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import SortInput from "./components/Sort/SortInput";
import Filter from "./components/Filter/Filter";
import PersonCard from "./components/PersonCard/PersonCard";
import ProductCard from "./components/ProductCard/ProductCard";
import useMediaQuery from "./hooks/useMediaQuery";
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";
import genericFilter from "./utils/genericFilter";
import { ItemType, SortType } from "./types/common";
import Person from "./types/person";
import Product from "./types/product";
import { persons } from "./data/persons";
import { products } from "./data/products";
import {
  BIG_SCREEN_SIZE,
  ITEMS_COUNT,
  SMALL_SCREEN_SIZE,
  PersonFilterKeys,
  ProductFilterKeys,
} from "./utils/constants";

import "./App.css";

function App() {
  const [selectedType, setSelectedType] = useState<ItemType>("person");
  const [data, setData] = useState<Array<Product | Person>>([]);
  const [filterKeys, setFilterKeys] = useState<Array<keyof (Product | Person)>>(
    []
  );
  const [reset, setReset] = useState<boolean>(false);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isPerson = useMemo(() => selectedType === "person", [selectedType]);
  const itemSize = useMemo(
    () => (isSmallScreen ? SMALL_SCREEN_SIZE : BIG_SCREEN_SIZE),
    [isSmallScreen]
  );

  useEffect(() => {
    if (isPerson) {
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
    setReset((reset) => !reset);
  }, [isPerson]);

  const dataKeys = useMemo(() => {
    return persons.length && products.length
      ? (Object.keys(isPerson ? persons[0] : products[0]).filter(
          (key) => key !== "id" && key !== "image"
        ) as Array<keyof (Person | Product)>)
      : [];
  }, [isPerson]);

  const getFilterOptions = useCallback(
    (key: keyof (Product | Person)) => {
      const filterValues: string[] = [];
      (isPerson ? persons : products).forEach((currentData) => {
        const filterValue = currentData[key];
        if (!filterValues.includes(filterValue)) {
          filterValues.push(filterValue);
        }
      });
      return filterValues;
    },
    [isPerson]
  );

  const onSearch = useCallback(
    (searchStr: string) => {
      const newData = genericSearch<Person | Product>(
        isPerson ? persons : products,
        dataKeys,
        searchStr
      );
      setData(newData);
    },
    [dataKeys, isPerson]
  );

  const onSort = useCallback(
    (option: keyof (Person | Product), sortType: SortType) => {
      const newData = genericSort<Person | Product>(
        isPerson ? persons : products,
        option,
        sortType === "descending"
      );
      setReset((reset) => !reset);
      setData(newData);
    },
    [isPerson]
  );

  const onFilter = useCallback(
    (property: keyof (Product | Person), values: string[]) => {
      const newData = genericFilter<Person | Product>(
        isPerson ? persons : products,
        property,
        values
      );
      setData(newData);
      setReset((reset) => !reset);
    },
    [isPerson]
  );

  return (
    <>
      <Header
        selectedType={selectedType}
        onItemClick={(itemType) => setSelectedType(itemType)}
      />
      <div className="search-sort-filter-container">
        <SearchInput
          label={`Search ${selectedType}s`}
          onSearch={onSearch}
          reset={reset}
        />
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
      {/* @ts-ignore -- react-virtualized have not been updated to support react v18 */}
      <AutoSizer>
        {({ height, width }) => {
          const itemsPerRow = isSmallScreen ? 1 : 2;
          const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

          return data.length ? (
            // @ts-ignore -- react-virtualized have not been updated to support react v18
            <List
              className="virtualized-list"
              width={width}
              height={isSmallScreen ? height : 2 * height}
              rowCount={rowCount}
              rowHeight={itemSize}
              rowRenderer={({ index, key, style }) => {
                const items = [];
                const fromIndex = index * itemsPerRow;
                const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

                for (let i = fromIndex; i < toIndex; i++) {
                  const currentData = data[i];
                  if (currentData) {
                    items.push(
                      isPerson ? (
                        <PersonCard
                          person={currentData as Person}
                          key={currentData ? currentData.id : index}
                        />
                      ) : (
                        <ProductCard
                          product={currentData as Product}
                          key={currentData ? currentData.id : index}
                        />
                      )
                    );
                  }
                }
                return (
                  <div className="virtualized-list-row" key={key} style={style}>
                    {items}
                  </div>
                );
              }}
            />
          ) : (
            <div className="no-items font-weight-bold">No items to display</div>
          );
        }}
      </AutoSizer>
    </>
  );
}

export default App;
