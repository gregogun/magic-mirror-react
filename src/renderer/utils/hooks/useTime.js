import { useEffect, useState } from "react";

const getHour = new Date().getHours();
const date = new Date();
const currentTime = `${
  // new Date().getHours() > 12
  //   ? new Date().getHours() - 12
  //   :
  new Date().getHours()
}:${
  new Date().getMinutes() < 10
    ? `0${new Date().getMinutes()}`
    : new Date().getMinutes()
}:${
  new Date().getSeconds() < 10
    ? `0${new Date().getSeconds()}`
    : new Date().getSeconds()
}`;

const useTime = () => {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(
      () =>
        setTime(
          `${
            // new Date().getHours() > 12
            //   ? new Date().getHours() - 12
            //   :
            new Date().getHours()
          }:${
            new Date().getMinutes() < 10
              ? `0${new Date().getMinutes()}`
              : new Date().getMinutes()
          }:${
            new Date().getSeconds() < 10
              ? `0${new Date().getSeconds()}`
              : new Date().getSeconds()
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
