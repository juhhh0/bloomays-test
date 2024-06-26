import { MissionsByDate } from "../types/types";

export const countMissions = (data: MissionsByDate) => {
  const sum = Object.keys(data).reduce((acc, date) => {
    return acc + data[date].length;
  }, 0);

  return sum;
};
