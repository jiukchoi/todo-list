export const getDate = (): string => {
  const date = new Date();
  const years = date.getFullYear();
  const months = String(date.getMonth() + 1);
  const dates = String(date.getDate());
  const days = WEEK[date.getDay()];
  return `${years}년 ${months}월 ${dates}일 ${days}요일`;
};

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];
