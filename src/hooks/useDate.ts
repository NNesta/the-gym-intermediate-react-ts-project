const useDate = () => {
  const today = new Date();
  let todayDate = {
    day: "Monday",
    month: "January",
    date: today.getDate(),
    year: today.getFullYear(),
  };

  switch (today.getDay()) {
    case 1:
      todayDate = { ...todayDate, day: "MONDAY" };
      break;
    case 2:
      todayDate = { ...todayDate, day: "TUESDAY" };
      break;
    case 3:
      todayDate = { ...todayDate, day: "WEDNESDAY" };
      break;
    case 4:
      todayDate = { ...todayDate, day: "THURSDAY" };
      break;
    case 5:
      todayDate = { ...todayDate, day: "FRIDAY" };
      break;
    case 6:
      todayDate = { ...todayDate, day: "SUTURDAY" };
      break;
    case 7:
      todayDate = { ...todayDate, day: "SUNDAY" };
      break;
    default:
      todayDate = { ...todayDate };
  }
  switch (today.getMonth()) {
    case 0:
      todayDate = { ...todayDate, month: "January" };
      break;
    case 1:
      todayDate = { ...todayDate, month: "February" };
      break;
    case 2:
      todayDate = { ...todayDate, month: "March" };
      break;
    case 3:
      todayDate = { ...todayDate, month: "April" };
      break;
    case 4:
      todayDate = { ...todayDate, month: "May" };
      break;
    case 5:
      todayDate = { ...todayDate, month: "June" };
      break;
    case 6:
      todayDate = { ...todayDate, month: "July" };
      break;
    case 7:
      todayDate = { ...todayDate, month: "August" };
      break;
    case 8:
      todayDate = { ...todayDate, month: "September" };
      break;
    case 9:
      todayDate = { ...todayDate, month: "October" };
      break;
    case 10:
      todayDate = { ...todayDate, month: "November" };
      break;
    case 11:
      todayDate = { ...todayDate, month: "December" };
      break;
    default:
      todayDate = { ...todayDate };
  }
  return todayDate;
};
export default useDate;
