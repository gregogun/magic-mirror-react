import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Collapse,
  Divider,
  Flex,
  Icon,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import { Heading2 } from "../components";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import { navigate } from "../utils/hooks/useHistory";
import SocketContext from "../utils/context/socketContext";

const Calendar = ({ ...props }) => {
  const { getEvents, events, isLoading } = useFetch();
  const socket = useContext(SocketContext);

  socket.on("home", () => {
    console.log("home received");
    navigate("/app");
  });

  useEffect(getEvents, []);

  const padding = events && events.length > 2 ? 8 : 16;

  return (
    <Box p={padding} textAlign="center">
      {!events && !isLoading && <Heading2 pt={8}>No events today...</Heading2>}
      {!events && isLoading && (
        <CircularProgress
          isIndeterminate
          trackColor="transparent"
          color="white"
        />
      )}

      {events && !isLoading && (
        <Stack spacing={8}>
          <Heading2>Upcoming</Heading2>
          <Divider />
          <List display="flex" flexDirection="column" spacing={4}>
            {events.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </List>
        </Stack>
      )}
    </Box>
  );
};

const Event = ({ event, ...props }) => {
  const { isOpen, onToggle } = useDisclosure();

  const startIsoDate = event.start.dateTime.toString().slice(11, 16);
  const endIsoDate = event.end.dateTime.toString().slice(11, 16);

  return (
    <ListItem
      rounded={8}
      mx="auto"
      p="8px"
      bg="#fff"
      color="#000"
      {...props}
      w="80%"
    >
      <Flex alignItems="center" justify="space-between">
        <Stack direction="row">
          <Text>{event.summary}</Text>
          <Text>@</Text>
          <Flex>
            <Text>{startIsoDate}</Text>
            <Text>-</Text>
            <Text>{endIsoDate}</Text>
          </Flex>
        </Stack>
        <Flex alignItems="center">
          <Text mr="4px">Details</Text>
          <IconButton
            onClick={onToggle}
            variant="ghost"
            _hover={{ variant: "ghost" }}
            icon={<FiChevronDown />}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Divider />
        <Stack p="4px">
          <Text>
            {event.description ? event.description : "No description provided."}
          </Text>
        </Stack>
      </Collapse>
    </ListItem>
  );
};
const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="32px" h="32px" as={FiArrowLeft} />;
};

export default Calendar;
