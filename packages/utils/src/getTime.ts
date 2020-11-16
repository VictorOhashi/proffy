const formatTime = (time: number) => String(time).padStart(2, '0');

const getTime = (date: Date) => {
  return `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
};

export default getTime;
