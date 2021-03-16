import { Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useTime from "../utils/hooks/useTime";

const date = new Date();

const Clock = () => {
  const { time } = useTime();

  return (
    <Center m="auto" w="50vw" height="50vh" mt="15vh">
      <Text fontFamily="digital" fontSize="10em" mr="4px">
        {time}
        {""}
      </Text>
    </Center>
  );
};

export default Clock;
