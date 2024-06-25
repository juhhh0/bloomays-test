import { useEffect, useState } from "react";
import { Mission } from "../types/types";
import { formatMissions, isDateIsWithinNextMonth, sortObjectByDate } from "../utils/utils";


export default function LeavingArrivingBloomers() {
  const [missions, setMissions] = useState([]);

  // Arriving Bloomers

  const nextBeginningMissions = missions.filter((mission: Mission) => {
    return isDateIsWithinNextMonth(new Date(mission.beginDate));
  });

  const arriving = formatMissions(nextBeginningMissions, "begin");

  const sortedArriving = sortObjectByDate(arriving);

  // Leaving Bloomers

  const nextEndingMissions = missions.filter((mission: Mission) => {
    return isDateIsWithinNextMonth(new Date(mission.endDate));
  });

  const leaving = formatMissions(nextEndingMissions, "end");

  const sortedLeaving = sortObjectByDate(leaving);

  console.log(sortedArriving, sortedLeaving)

  // Fetch api

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/missions");
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>LeavingArrivingBloomers</div>;
}
