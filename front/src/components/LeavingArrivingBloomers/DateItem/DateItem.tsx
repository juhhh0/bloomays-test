import { FormatedMission } from "../../../types/types";
import styles from "../LeavingArrivingBloomers.module.scss";

type DateItemProp = {
  date: string;
  missions: FormatedMission[];
};

const DateItem: React.FC<DateItemProp> = ({ date, missions }) => {
  return (
    <div className={styles.date}>
      <p>{date}</p>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id} className={styles.bloomer}>
            {mission.firstname} {mission.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateItem;
