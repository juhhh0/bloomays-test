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

  const nextBeginningMissions = missions.filter((mission: Mission) => {
    return isDateIsWithinNextMonth(new Date(mission.beginDate));
  });

  const nextEndingMissions = missions.filter((mission: Mission) => {
    return isDateIsWithinNextMonth(new Date(mission.endDate));
  });

  const arriving = new Map();
  const leaving = new Map();

  nextBeginningMissions.forEach((mission: Mission) => {
    if (arriving.has(mission.beginDate)) {
      arriving.get(mission.beginDate).push(mission);
    } else {
      arriving.set(mission.beginDate, [mission]);
    }
  });

  nextEndingMissions.forEach((mission: Mission) => {
    if (leaving.has(mission.endDate)) {
      leaving.get(mission.endDate).push(mission);
    } else {
      leaving.set(mission.endDate, [mission]);
    }
  })

  console.log(arriving, leaving);

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
