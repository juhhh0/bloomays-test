  // Utils

import { Mission } from "../types/types";

  // Check si une date est dans la fin du mois courant ou le mois suivant

  const isDateIsWithinNextMonth = (date: Date) => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0);

    return date >= now && date <= nextMonth;
  };

  // Classer un objet par date

  const sortObjectByDate = (obj: any) => {
    const sortedKeys = Object.keys(obj).sort((a, b) => {
      return new Date(a) > new Date(b) ? 1 : -1;
    });

    const sortedObject: { [key: string]: any } = {};

    sortedKeys.forEach((key) => {
      sortedObject[key] = obj[key];
    });

    return sortedObject;
  };

  // Formater les missions

  const formatMissions = (missions: Mission[], sortBy: "begin" | "end") => {
    let map = new Map();

    missions.forEach((mission) => {
      const formatedMission = {
        id: mission.id,
        firstname: mission.freelance.firstname,
        lastname: mission.freelance.lastname,
        beginMission: mission.beginDate,
        endMission: mission.endDate,
      };

      const key = sortBy === "begin" ? mission.beginDate : mission.endDate;

      if (map.has(key)) {
        map.get(key).push(formatedMission);
      } else {
        map.set(key, [formatedMission]);
      }
    });

    return Object.fromEntries(map);
  };

  export { isDateIsWithinNextMonth, sortObjectByDate, formatMissions}