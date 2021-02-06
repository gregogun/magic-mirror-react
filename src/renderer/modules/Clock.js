import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

// intending to work this hook in later
import { useDate } from "../utils/hooks";

const currentTime = new Date().toISOString().slice(11, 13);

const Meridian = ({ ...props }) => {
  const [meridian, setMeridian] = useState(currentTime >= 12 ? "pm" : "am");

  const checkAmPm = () => {
    const current = new Date().toISOString().slice(11, 13);
    if (current >= 12) {
      setMeridian("pm");
    } else {
      setMeridian("am");
    }
  };

  useEffect(() => {
    setInterval(() => checkAmPm(), 1000);
    return () => {
      clearInterval();
    };
  }, [meridian]);

  return <Text {...props}>{meridian}</Text>;
};

//const currentTime = convertTime(currentISODate);

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval();
    };
  }, [time]);

  return (
    <Flex direction="column" textAlign="center">
      <Text fontSize="sm">{time.toString().slice(0, 15)}</Text>
      <Flex fontSize="3xl" justify="center">
        <Text mr="4px">
          {time.toString().slice(16, 21)}
          {""}
        </Text>
        <Meridian />
      </Flex>
    </Flex>
  );
};

export default Clock;
