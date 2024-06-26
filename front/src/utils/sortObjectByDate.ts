// Classer les key d'un objet par date

export const sortObjectByDate = (obj: any) => {
  const sortedKeys = Object.keys(obj).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  const sortedObject: { [key: string]: any } = {};

  sortedKeys.forEach((key) => {
    sortedObject[key] = obj[key];
  });

  return sortedObject;
};
