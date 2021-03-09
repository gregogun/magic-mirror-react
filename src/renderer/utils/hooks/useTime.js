import { useEffect, useState } from "react";

const getHour = new Date().getHours();
const date = new Date();
const currentTime = `${
  new Date().getHours() > 12
    ? new Date().getHours() - 12
    : new Date().getHours()
}:${
  new Date().getMinutes() < 10
    ? `0${new Date().getMinutes()}`
    : new Date().getMinutes()
}`;

const useTime = () => {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(
      () =>
        setTime(
          `${
            new Date().getHours() > 12
              ? new Date().getHours() - 12
              : new Date().getHours()
          }:${
            new Date().getMinutes() < 10
              ? `0${new Date().getMinutes()}`
              : new Date().getMinutes()
          }`
        ),
      1000
    );
    return () => {
      clearInterval();
    };
  }, [time]);

  return { time };
};

export default useTime;
