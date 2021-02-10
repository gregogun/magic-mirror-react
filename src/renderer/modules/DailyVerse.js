import React, { useContext, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Fade,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import { Heading2 } from "../components";
import { FiArrowLeft } from "react-icons/fi";
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
    </Box>
  );
};

const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="32px" h="32px" as={FiArrowLeft} />;
};

export default DailyVerse;
