import { useEffect, useState } from "react";

type Freelance = {
  firstname: string;
  lastname: string;
  email: string;
};

type Mission = {
  id: number;
  beginDate: string;
  endDate: string;
  missionType: string;
  label: string;
  freelance: Freelance;
};

export default function LeavingArrivingBloomers() {
  const [missions, setMissions] = useState([]);

  const isDateIsWithinNextMonth = (date: Date) => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0);

    return date >= now && date <= nextMonth;
  };

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
