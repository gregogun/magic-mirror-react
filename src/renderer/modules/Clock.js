import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useMeridian from "../utils/hooks/useMeridian";

const getHour = new Date().getHours();
const hour = getHour - 12;
const minute = new Date().getMinutes();
const second = new Date().getSeconds();
const date = new Date();
const currentTime = `${hour}:${minute}`;

const Clock = () => {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(
      () =>
        setTime(
          `${
            new Date().getHours() > 12
              ? new Date().getHours() - 12
              : new Date().getHours()
          }:${new Date().getMinutes()}`
        ),
      1000
    );
    return () => {
      clearInterval();
    };
  }, [time]);

  return (
    <Flex direction="column" textAlign="center">
      <Text fontSize="sm">{date.toString().slice(0, 15)}</Text>
      <Flex fontSize="3xl" justify="center">
        <Text mr="4px">
          {time}
          {""}
        </Text>
        <Meridian />
      </Flex>
    </Flex>
  );
};

const Meridian = ({ ...props }) => {
  const { meridian } = useMeridian();

  return <>{meridian && <Text {...props}>{meridian}</Text>}</>;
};

export default Clock;
