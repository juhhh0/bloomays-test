import { MissionsByDate } from "../../../types/types";
import { formatDate } from "../../../utils/formatDate";
import DateItem from "../DateItem/DateItem";
import styles from "../LeavingArrivingBloomers.module.scss"

type BloomersProp = {
  data: MissionsByDate;
  type: "leaving" | "arriving";
};

const Bloomers: React.FC<BloomersProp> = ({ data, type }) => {
  const totalBloomers = Object.keys(data).reduce((acc, date) => {
    return acc + data[date].length;
  }, 0);

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
