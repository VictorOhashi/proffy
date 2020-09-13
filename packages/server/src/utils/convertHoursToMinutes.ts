export default function convertHoursToMinutes(time: string) {
  if (!time) {
    return;
  }
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
}
