import { Mission } from "../types/types";
import { formatMissions } from "../utils/formatMissions";
import { isDateIsWithinNextMonth } from "../utils/isDateWithinNextMonth";
import { sortObjectByDate } from "../utils/sortObjectByDate";

const BASE_URL = "http://localhost:3000";

export const getMissions = async () => {
  try {
    const response = await fetch(BASE_URL + "/missions");

    const data = await response.json();

    // Arriving Bloomers

    const nextBeginningMissions = data.filter((mission: Mission) => {
      return isDateIsWithinNextMonth(new Date(mission.beginDate));
    });


    const formatedArriving = formatMissions(nextBeginningMissions, "begin");


    const sortedArriving = sortObjectByDate(formatedArriving);

    // Leaving Bloomers

    const nextEndingMissions = data.filter((mission: Mission) => {
      return isDateIsWithinNextMonth(new Date(mission.endDate));
    });

    const formatedLeaving = formatMissions(nextEndingMissions, "end");

    const sortedLeaving = sortObjectByDate(formatedLeaving);

    return {
      sortedArriving,
      sortedLeaving,
    };
  } catch (error) {
    console.log(error);
  }
};
