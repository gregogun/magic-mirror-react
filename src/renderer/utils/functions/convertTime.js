export const convertTime = (isoTime) => {
  let hours = parseInt(isoTime.substring(0, 2), 10),
    minutes = isoTime.substring(3, 5),
    ampm = "am";

  if (hours === 12) {
    ampm = "pm";
  } else if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    ampm = "pm";
  }

  return hours + ":" + minutes + " " + ampm;
};
