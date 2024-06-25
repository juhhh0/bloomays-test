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

  const nextBeginningMissions = missions.filter((mission: Mission) => {
    return isDateIsWithinNextMonth(new Date(mission.beginDate));
  });

  const nextEndingMissions = missions.filter((mission: Mission) => {
    return isDateIsWithinNextMonth(new Date(mission.endDate));
  });

  const arrivingMap = new Map();
  const leavingMap = new Map();

  nextBeginningMissions.forEach((mission: Mission) => {
    if (arrivingMap.has(mission.beginDate)) {
      arrivingMap.get(mission.beginDate).push(mission);
    } else {
      arrivingMap.set(mission.beginDate, [mission]);
    }
  });

  nextEndingMissions.forEach((mission: Mission) => {
    if (leavingMap.has(mission.endDate)) {
      leavingMap.get(mission.endDate).push(mission);
    } else {
      leavingMap.set(mission.endDate, [mission]);
    }
  });

  const arriving = Object.fromEntries(arrivingMap);
  const leaving = Object.fromEntries(leavingMap);

  const sortedArriving = sortObjectByDate(arriving);
  const sortedLeaving = sortObjectByDate(leaving);

  console.log(sortedArriving, "sortedArriving");

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
