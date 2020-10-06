export const dateFormatter = (date) => {
  const formattedDate = new Date(date).toLocaleString();
  return formattedDate;
};
