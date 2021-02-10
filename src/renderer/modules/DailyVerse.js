import React, { useContext, useEffect, useState } from "react";
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
import { Link as ReachLink } from "@reach/router";
import { navigate } from "../utils/hooks/useHistory";
import SocketContext from "../utils/context/socketContext";

const DailyVerse = ({ ...props }) => {
  const { checkVerse, verseText, verseRef, currentDay, isLoading } = useFetch();
  const socket = useContext(SocketContext);

  socket.on("home", () => {
    navigate("/app");
  });

  useEffect(checkVerse, []);

  const padding = verseText && verseText > 200 ? 8 : 16;

  return (
    <Box p={padding} textAlign="center">
      {!verseText && !isLoading && (
        <Text>There was a problem getting your verse. Check back soon!</Text>
      )}
      {!verseText && isLoading && (
        <CircularProgress
          isIndeterminate
          trackColor="transparent"
          color="white"
        />
      )}
      {verseText && !isLoading && (
        <Fade in={true}>
          <Stack spacing={4}>
            <Heading2 fontSize="4xl" fontWeight="thin">
              Verse of the day
            </Heading2>
            <Divider />
            <Stack>
              <Text fontSize="2xl">"{verseText}"</Text>
              <Text fontSize="lg">{verseRef}</Text>
            </Stack>
          </Stack>
        </Fade>
      )}
      <Flex
        bg="red.200"
        position="absolute"
        bottom="4px"
        left="16px"
        bg="gray.200"
      >
        <Footer>
          <Link as={ReachLink} to="/app">
            <IconButton
              variant="ghost"
              _hover={{ variant: "ghost" }}
              _active={{ variant: "ghost" }}
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
