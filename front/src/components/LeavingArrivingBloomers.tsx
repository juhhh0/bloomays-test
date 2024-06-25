import { useEffect, useState } from "react";
import { FormatedMission, Mission } from "../types/types";
import {
  formatMissions,
  isDateIsWithinNextMonth,
  sortObjectByDate,
} from "../utils/utils";

type MissionsStateType = {
  [key: string]: FormatedMission[];
};

export default function LeavingArrivingBloomers() {
  const [leaving, setLeaving] = useState<MissionsStateType>({});

  const [arriving, setArriving] = useState<MissionsStateType>({});

  useEffect(() => {
    // Fetch api

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/missions");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData().then((data) => {
      // Arriving Bloomers

      const nextBeginningMissions = data.filter((mission: Mission) => {
        return isDateIsWithinNextMonth(new Date(mission.beginDate));
      });

      const arriving = formatMissions(nextBeginningMissions, "begin");

      const sortedArriving = sortObjectByDate(arriving);

      setArriving(sortedArriving);

      // Leaving Bloomers

      const nextEndingMissions = data.filter((mission: Mission) => {
        return isDateIsWithinNextMonth(new Date(mission.endDate));
      });

      const leaving = formatMissions(nextEndingMissions, "end");

      const sortedLeaving = sortObjectByDate(leaving);

      setLeaving(sortedLeaving);
    });
  }, []);

  return (
    <div>
      <Bloomers data={arriving} type="arriving" />
      <Bloomers data={leaving} type="leaving" />
    </div>
  );
}

const Bloomers = ({
  data,
  type,
}: {
  data: MissionsStateType;
  type: "leaving" | "arriving";
}) => {

  const totalBloomers = Object.keys(data).reduce((acc, date) => {
    return acc + data[date].length;
  }, 0);

  return (
    <div>
      {totalBloomers} Bloomers {type === "leaving" ? "sortants" : "entrants"}
      <div>
        {Object.keys(data).map((date) => (
          <DateItem date={date} missions={data[date]} />
        ))}
      </div>
    </div>
  );
};

const DateItem = ({
  date,
  missions,
}: {
  date: string;
  missions: FormatedMission[];
}) => {
  return (
    <div>
      <p>{date}</p>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            {mission.firstname} {mission.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};
