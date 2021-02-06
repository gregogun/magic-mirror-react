import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Divider,
  Flex,
  Heading,
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
import { FiArrowLeftCircle, FiChevronDown } from "react-icons/fi";

const Calendar = () => {
  const { getEvents, events, isLoading } = useFetch();

  useEffect(getEvents, []);

  return (
    <Box textAlign="center">
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

      <Footer>
        <Link as={ReachLink} to="/app">
          <IconButton
            variant="ghost"
            _hover={{ variant: "ghost" }}
            icon={<ReturnIcon />}
          />
        </Link>
      </Footer>
    </Box>
  );
};

const Event = ({ event, ...props }) => {
  const { isOpen, onToggle } = useDisclosure();

  const startIsoDate = event.start.dateTime.toString().slice(11, 16);
  const endIsoDate = event.end.dateTime.toString().slice(11, 16);

  return (
    <ListItem mx="auto" p="8px" borderBottom="1px solid" {...props} w="80%">
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
        <Stack p="4px">
          <Divider />
          <Text>
            {event.description ? event.description : "No description provided."}
          </Text>
        </Stack>
      </Collapse>
    </ListItem>
  );
};
const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="32px" h="32px" as={FiArrowLeftCircle} />;
};

export default Calendar;
