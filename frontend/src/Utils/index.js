export const formatDateToString = (stringDate) => {
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
        minute: "numeric",
    }).format(date);

    return `${hour} ${day} ${month} ${year}`.toLowerCase();
}