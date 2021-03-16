import { Box, Center, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks";
import { FiCloud, FiSun, FiCloudLightning } from "react-icons/fi";
import { IoMdCloudy } from "react-icons/io";
import { FaSnowflake, FaSun } from "react-icons/fa";

const Weather = () => {
  const { getWeather, weather, isLoading } = useFetch();

  const condition = weather && weather.weather[0].main;

  const weatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return FiSun;
        break;
      case "Clouds":
        return IoMdCloudy;
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
        return IoMdCloudy;
        break;
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const temperature = Math.floor(weather && weather.main.temp);
  const feelsLike = Math.floor(weather && weather.main.feels_like);

  return (
    <Box>
      {!weather && !isLoading && <Text>No weather...</Text>}
      {weather && (
        <Center m="auto" w="50vw" height="50vh" mt="15vh">
          <Flex
            p="0.5em"
            w="80%"
            h="60%"
            rounded="md"
            border="1px solid white"
            justify="space-between"
          >
            <Flex p="0.5em" direction="column" justify="space-between">
              <Icon
                p="0.5em"
                border="1px solid"
                rounded="md"
                w="3em"
                h="3em"
                mr="8px"
                as={weatherIcon(condition)}
              />
              <Flex direction="column">
                <Text fontSize="2xl">{weather.weather[0].main}</Text>
                <Text fontSize="md">{weather.name}</Text>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex>
                <Text fontSize="4em" fontWeight="600">
                  {temperature}
                </Text>
                <Text pt="16px" fontSize="2xl">
                  °
                </Text>
              </Flex>
              <Text fontSize="sm">Feels like {feelsLike} °</Text>
            </Flex>
          </Flex>
        </Center>
      )}
    </Box>
  );
};

export default Weather;
