import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
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
} from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import { Heading2 } from "../components";
import Footer from "../layout/Footer";
import { Link as ReachLink } from "@reach/router";
import { FiArrowLeftCircle } from "react-icons/fi";

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
      <Stack>
        <Heading2>Upcoming</Heading2>
        <Divider />
        <List>
          {events &&
            !isLoading &&
            events.map((event) => (
              <ListItem key={event.id}>{event.summary}</ListItem>
            ))}
        </List>
      </Stack>
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

const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="32px" h="32px" as={FiArrowLeftCircle} />;
};

export default Calendar;
