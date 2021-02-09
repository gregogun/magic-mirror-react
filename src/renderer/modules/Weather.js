import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks";
import {
  FiCloud,
  FiCloudRain,
  FiSun,
  FiMoon,
  FiCloudLightning,
} from "react-icons/fi";
import { FaSnowflake } from "react-icons/fa";

const Weather = () => {
  const { getWeather, weather, isLoading } = useFetch();

  const condition = weather && weather.weather[0].main;

  const weatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return FiClear;
        break;
      case "Clouds":
        return FiCloud;
        break;
      case "Rain" || "Drizzle":
        return FiRain;
        break;
      case "Snow":
        return FaSnowflake;
        break;
      case "Thunderstorm":
        return FiCloudLightning;
        break;

      default:
        return FiCloud;
        break;
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const temperature = Math.floor(weather && weather.main.temp);

  return (
    <Box>
      {!weather && !isLoading && <Text>No weather...</Text>}
      {weather && (
        <Stack spacing={4} direction="row" alignItems="center">
          <Flex direction="column">
            <Text fontSize="2xl">{weather.name}</Text>
            <Flex alignItems="center">
              <Icon w="16px" h="16px" mr="8px" as={weatherIcon(condition)} />
              <Text>{weather.weather[0].main}</Text>
            </Flex>
          </Flex>
          <Text fontSize="4xl">{temperature}°</Text>
        </Stack>
      )}
    </Box>
  );
};

export default Weather;
