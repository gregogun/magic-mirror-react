import { useEffect, useState } from "react";

const currentTime = new Date().toString().slice(11, 13);

const useMeridian = () => {
  const [meridian, setMeridian] = useState(
    new Date().getHours() >= 12 ? "pm" : "am"
  );

  const checkMeridian = () => {
    const current = new Date().getHours() - 12;
    if (current >= 12) {
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
