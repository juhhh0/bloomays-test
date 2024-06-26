import React from "react";
import { getMissions } from "../../services/MissionsService";
import styles from "./LeavingArrivingBloomers.module.scss";
import { useQuery } from "@tanstack/react-query";
import Bloomers from "./Bloomers/Bloomers";

const LeavingArrivingBloomers: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["missions"],
    queryFn: getMissions,
  });

  if (isError)
    return (
      <div className={styles.modal}>
        Erreur lors de la récupération des données
      </div>
    );

  if (isLoading)
    return (
      <div className={styles.modal}>
        <img src="/loader.svg" alt="loading spinner" />
      </div>
    );

  if (!data) return <div className={styles.modal}>Pas de missions trouvés</div>;

  return (
    <div className={styles.modal}>
      <Bloomers data={data.sortedArriving} type="arriving" />
      <Bloomers data={data.sortedLeaving} type="leaving" />
    </div>
  );
};

export default LeavingArrivingBloomers;
