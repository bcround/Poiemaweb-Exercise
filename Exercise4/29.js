/*
29. 일주일 날짜 구하기
오늘을 기준으로 YYYY-MM-DD 형식의 문자열을 요소로 갖는 배열로 일주일 간의 날짜를 구하는 함수를 완성하라. 
단, 함수가 반환하는 배열은 일요일부터 시작해서 토요일까지 구성한다.

*/

function getCurrentWeek() {
  let currentWeekDate = [];
  const today = new Date(2021,0,1);
  let weekStartDay = new Date(today - 86400000 * today.getDay());

  for (let i = 0; i < 7; i++) {
    const year = weekStartDay.getFullYear();
    let month = weekStartDay.getMonth() + 1;
    let date = weekStartDay.getDate();

    if (month.toString().length === 1) month = '0' + month;
    if (date.toString().length === 1) date = '0' + date;

    currentWeekDate = [...currentWeekDate, `${year}-${month}-${date}`];
    weekStartDay = new Date(Date.UTC(year, month - 1, date) + 86400000);
  }

  return currentWeekDate;
}

console.log(getCurrentWeek());