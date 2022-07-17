const genericSort = <T>(
  objectArray: Array<T>,
  property: keyof T,
  isDesc: boolean = false
): Array<T> => {
  return objectArray.slice().sort((objectA, objectB) => {
    const propertyValueA = objectA[property];
    const propertyValueB = objectB[property];
    if (
      typeof propertyValueA === "string" &&
      typeof propertyValueB === "string"
    ) {
      const propertyValueStrA = propertyValueA.toLowerCase();
      const propertyValueStrB = propertyValueB.toLowerCase();
      if (propertyValueStrA < propertyValueStrB) {
        return isDesc ? 1 : -1;
      } else if (propertyValueStrA > propertyValueStrB) {
        return isDesc ? -1 : 1;
      } else {
        return 0;
      }
    } else if (
      typeof propertyValueA === "number" &&
      typeof propertyValueB === "number"
    ) {
      if (isDesc) {
        return propertyValueB - propertyValueA;
      } else {
        return propertyValueA - propertyValueB;
      }
    } else if (
      typeof propertyValueA === "object" &&
      typeof propertyValueB === "object"
    ) {
      const propertyValueStrA = Object.values(propertyValueA)
        .join(" ")
        .toLowerCase();
      const propertyValueStrB = Object.values(propertyValueB)
        .join(" ")
        .toLowerCase();
      if (propertyValueStrA < propertyValueStrB) {
        return isDesc ? 1 : -1;
      } else if (propertyValueStrA > propertyValueStrB) {
        return isDesc ? -1 : 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });
};

export default genericSort;
