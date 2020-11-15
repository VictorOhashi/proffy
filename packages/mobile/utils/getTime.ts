const formatTime = (time: number) => String(time).padStart(2, '0');

export const getTime = (date: Date) => {
  return `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
};
