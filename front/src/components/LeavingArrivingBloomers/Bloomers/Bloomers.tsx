import DateItem from "../DateItem/DateItem";
import styles from "../LeavingArrivingBloomers.module.scss";

import { MissionsByDate } from "../../../types/types";

import { formatDate } from "../../../utils/formatDate";

type BloomersProp = {
  data: MissionsByDate;
  type: "leaving" | "arriving";
  totalBloomers: number;
};

const Bloomers: React.FC<BloomersProp> = ({ data, type, totalBloomers }) => {
  return (
    <div
      className={`${styles.container} ${type === "leaving" ? styles.red : ""}`}
    >
      <h2>
        <span>{totalBloomers}</span>
        Bloomers {type === "leaving" ? "sortants" : "entrants"}
      </h2>
      <div className={styles.dates}>
        {Object.keys(data).map((date) => (
          <DateItem key={date} date={formatDate(date)} missions={data[date]} />
        ))}
      </div>
    </div>
  );
};

export default Bloomers;
