import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useMeridian from "../utils/hooks/useMeridian";
import useTime from "../utils/hooks/useTime";

const date = new Date();

const Clock = () => {
  const { time } = useTime();

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
