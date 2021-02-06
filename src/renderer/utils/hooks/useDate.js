import { useState } from "react";

const useDate = () => {
  const [meridian, setMeridian] = useState();

  const checkAmPm = () => {
    const current = new Date().toISOString().slice(11, 13);
    if (current >= 12) {
      setMeridian("pm");
    } else {
      setMeridian("am");
    }
  };

  return { checkAmPm, meridian };
};

export default useDate;
