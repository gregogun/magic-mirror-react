import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useFetch } from "../utils/hooks";
import { FiCloud } from "react-icons/fi";

const Weather = () => {
  const { getWeather, weather } = useFetch();

  useEffect(getWeather, []);

  const temperature = Math.floor(weather && weather.main.temp);

  return (
    <Box>
      {weather ? (
        <Stack spacing={4} direction="row" alignItems="center">
          <Flex direction="column">
            <Text fontSize="2xl">{weather.name}</Text>
            <Flex alignItems="center">
              <Icon w="16px" h="16px" mr="8px" as={FiCloud} />
              <Text>{weather.weather[0].main}</Text>
            </Flex>
          </Flex>
          <Text fontSize="4xl">{temperature}°</Text>
        </Stack>
      ) : (
        <Text>No weather...</Text>
      )}
    </Box>
  );
};

export default Weather;
