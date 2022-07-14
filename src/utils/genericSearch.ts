const genericSearch = <T>(
  objectArray: Array<T>,
  properties: Array<keyof T>,
  searchInput: string
): Array<T> => {
  if (!searchInput) {
    return objectArray;
  }

  const tempSearchInput = searchInput.toLowerCase().trimStart().trimEnd();
  return objectArray.filter((object) =>
    properties.some((property) => {
      const propertyValue = object[property];
      if (
        typeof propertyValue === "string" ||
        typeof propertyValue === "number"
      ) {
        return propertyValue.toString().toLowerCase().includes(tempSearchInput);
      }
      return false;
    })
  );
};

export default genericSearch;
