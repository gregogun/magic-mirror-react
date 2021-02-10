import { useEffect, useState } from "react";

const useMeridian = () => {
  const [meridian, setMeridian] = useState(
    new Date().getHours() >= 12 ? "pm" : "am"
  );

  const checkMeridian = () => {
    if (new Date().getHours() >= 12) {
      setMeridian("pm");
    } else {
      setMeridian("am");
    }
  };

  useEffect(() => {
    setInterval(() => checkMeridian(), 1000);
    return () => {
      clearInterval();
    };
  }, [meridian]);

  return { meridian };
};

export default useMeridian;
