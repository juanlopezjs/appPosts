/**
 * Function that formats the registration date
 * @author Juan Manuel López
 * @param {String} stringDate registration date
 * @returns {String}
 */
const formatDateToString = (stringDate) => {
  const date = new Date(stringDate);
  const year = new Intl.DateTimeFormat("sp", {
    year: "numeric"
  }).format(date);
  const month = new Intl.DateTimeFormat("sp", {
    month: "short"
  }).format(date);
  const day = new Intl.DateTimeFormat("sp", {
    day: "2-digit"
  }).format(date);
  const hour = new Intl.DateTimeFormat("sp", {
    hour: "2-digit",
    minute: "numeric"
  }).format(date);

  return `${hour} ${day} ${month} ${year}`.toLowerCase();
};

export default formatDateToString;
