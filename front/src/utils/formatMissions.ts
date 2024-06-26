import { Mission } from "../types/types";

// Formater les missions

export const formatMissions = (
  missions: Mission[],
  sortBy: "begin" | "end"
) => {
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
