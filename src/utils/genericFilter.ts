const genericFilter = <T>(
  objectArray: Array<T>,
  property: keyof T,
  filterValues: Array<string | number>
): Array<T> => {
  if (filterValues.length === 0) {
    return objectArray;
  }

  const tempFilterValues = filterValues.map((filterValue) =>
    filterValue.toString().toLowerCase().trimStart().trimEnd()
  );
  return objectArray.filter((object) => {
    const propertyValue = object[property];
    if (
      typeof propertyValue === "string" ||
      typeof propertyValue === "number"
    ) {
      return tempFilterValues.some(
        (tempFilterValue) =>
          tempFilterValue === propertyValue.toString().toLowerCase()
      );
    }
    return false;
  });
};

export default genericFilter;
