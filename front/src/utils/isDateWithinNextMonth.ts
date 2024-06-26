// Check si une date est dans la fin du mois courant ou le mois suivant

const isDateIsWithinNextMonth = (date: Date) => {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0);

  return date >= now && date <= nextMonth;
};

export { isDateIsWithinNextMonth };
