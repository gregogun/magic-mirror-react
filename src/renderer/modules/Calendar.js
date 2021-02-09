import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Collapse,
  Divider,
  Flex,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import { Heading2 } from "../components";
import Footer from "../layout/Footer";
import { Link as ReachLink } from "@reach/router";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

const Calendar = ({ ...props }) => {
  const { getEvents, events, isLoading } = useFetch();

  useEffect(getEvents, []);

  const padding = events && events.length > 2 ? 8 : 16;

  return (
    <Box p={padding} textAlign="center">
      {!events && !isLoading && <Text>No events today...</Text>}
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
