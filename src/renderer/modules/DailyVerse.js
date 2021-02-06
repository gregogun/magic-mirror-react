import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Fade,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import { Heading2 } from "../components";
import Footer from "../layout/Footer";
import { FiArrowLeft } from "react-icons/fi";
import {
  Link as ReachLink,
  createHistory,
  createMemorySource,
  LocationProvider,
  navigate,
} from "@reach/router";

const DailyVerse = () => {
  const { getVerse, verse, isLoading } = useFetch();

  useEffect(getVerse, []);

  return (
    <Box textAlign="center">
      {!verse && !isLoading && (
        <Text>There was a problem getting your verse. Check back soon!</Text>
      )}
      {!verse && isLoading && (
        <CircularProgress
          isIndeterminate
          trackColor="transparent"
          color="white"
        />
      )}
      {verse && !isLoading && (
        <Fade in={true}>
          <Stack spacing={8}>
            <Heading2 fontSize="4xl" fontWeight="thin">
              Verse of the day
            </Heading2>
            <Divider />
            <Stack>
              <Text fontSize="2xl">"{verse.text}"</Text>
              <Text fontSize="lg">{verse.reference}</Text>
            </Stack>
          </Stack>
        </Fade>
      )}
      <Flex bg="red.200" position="absolute" bottom="8px" bg="gray.200">
        <Footer>
          <Link as={ReachLink} to="/app">
            <IconButton
              variant="ghost"
              _hover={{ variant: "ghost" }}
              icon={<ReturnIcon />}
            />
          </Link>
        </Footer>
      </Flex>
    </Box>
  );
};

const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="32px" h="32px" as={FiArrowLeft} />;
};

export default DailyVerse;
