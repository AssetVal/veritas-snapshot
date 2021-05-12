export const localTime = (date: Date): string => new Date(date).toLocaleString().replace(':00 PM', ' PM').replace(':00 AM', ' AM');
export default localTime;
