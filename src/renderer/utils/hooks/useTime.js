import { useEffect, useState } from "react";

const getHour = new Date().getHours();
const hour = getHour - 12;
const minute = new Date().getMinutes();
const second = new Date().getSeconds();
const date = new Date();
const currentTime = `${hour}:${minute < 10 ? `0${minute}` : minute}`;

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
