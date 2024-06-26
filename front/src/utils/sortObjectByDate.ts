// Classer les key d'un objet par date

import { MissionsByDate } from "../types/types";

export const sortObjectByDate = (obj: MissionsByDate) => {
  const sortedKeys = Object.keys(obj).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  const sortedObject: MissionsByDate = {};

  sortedKeys.forEach((key) => {
    sortedObject[key] = obj[key];
  });

  return sortedObject;
};
