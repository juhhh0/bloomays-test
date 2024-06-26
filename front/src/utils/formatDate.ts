// Formater une date au format DD/MM/YYYY

export const formatDate = (date: string) => {
  const formatedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formatedDate;
};
