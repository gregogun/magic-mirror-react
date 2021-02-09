import { useEffect, useState } from "react";

const currentTime = new Date().toString().slice(11, 13);

const useMeridian = () => {
  const [meridian, setMeridian] = useState(currentTime >= 12 ? "pm" : "am");

  const checkMeridian = () => {
    const current = new Date().toISOString().slice(11, 13);
    if (current >= 12) {
      setMeridian("pm");
    } else {
      setMeridian("am");
    }
  };

  useEffect(() => {
    setInterval(() => checkMeridian(), 1000 * 60);
    return () => {
      clearInterval();
    };
  }, [meridian]);

  return { meridian };
};

export default useMeridian;
