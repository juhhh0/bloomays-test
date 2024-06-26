import React from "react";
import styles from "./LeavingArrivingBloomers.module.scss";
import Bloomers from "./Bloomers/Bloomers";

import { useQuery } from "@tanstack/react-query";
import { getMissions } from "../../services/MissionsService";
import { countMissions } from "../../utils/countMissions";


const LeavingArrivingBloomers: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["missions"],
    queryFn: getMissions,
  });

  if (isError)
    return (
      <div className={styles.modal}>
        <div className={styles.container}>
          Erreur lors de la récupération des données
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className={styles.modal}>
        <div className={styles.container}>
          <img src="/loader.svg" alt="loading spinner" />
        </div>
      </div>
    );

  if (!data)
    return (
      <div className={styles.modal}>
        <div className={styles.container}>Pas de missions trouvés</div>
      </div>
    );

  return (
    <div className={styles.modal}>
      <Bloomers
        data={data.sortedArriving}
        type="arriving"
        totalBloomers={countMissions(data.sortedArriving)}
      />
      <Bloomers
        data={data.sortedLeaving}
        type="leaving"
        totalBloomers={countMissions(data.sortedLeaving)}
      />
    </div>
  );
};

export default LeavingArrivingBloomers;
