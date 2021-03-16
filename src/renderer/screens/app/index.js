import React, { useContext } from "react";
import {
  Box,
  Stack,
  Icon,
  LinkBox,
  LinkOverlay,
  Fade,
  Grid,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import ScreenWrapper from "../../layout/ScreenWrapper";
import { Link as ReachLink, LocationProvider, Router } from "@reach/router";
import Calendar from "../../modules/Calendar";
import DailyVerse from "../../modules/DailyVerse";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import { Heading2 } from "../../components";
import { FiCalendar, FiBookOpen, FiClock } from "react-icons/fi";
import { Clock, Weather } from "../../modules";
import { history, navigate } from "../../utils/hooks/useHistory";
import SocketContext from "../../utils/context/socketContext";

const AppScreen = () => {
  return (
    <ScreenWrapper>
      <Stack spacing={8} p="8px" w="100%" h="100%">
        <Fade in={true} exit={true}>
          <Main>
            <LocationProvider history={history}>
              <Router>
                <Dashboard path="/" />
                <Clock path="clock" />
                <Weather path="weather" />
                <Calendar path="calendar" />
                <DailyVerse path="daily-verse" />
              </Router>
            </LocationProvider>
          </Main>
        </Fade>
      </Stack>
    </ScreenWrapper>
  );
};

const Line = () => {
  return <Box bg="#fff" w="100%" h="1px" />;
};

const ModuleLink = ({ name, icon, to, ...props }) => {
  return (
    <LinkBox
      {...props}
      _hover={{
        textDecor: "none",
        cursor: "none",
        boxShadow: " 0 0 0 2px",
        transitionDuration: "350ms",
      }}
      display="flex"
      alignItems="center"
      p="1em"
      border="1px solid"
      rounded="md"
    >
      <LinkIcon icon={icon} />
      <Heading2 fontSize="4xl">
        <LinkOverlay as={ReachLink} to={to}>
          {name}
        </LinkOverlay>
      </Heading2>
    </LinkBox>
  );
};

const Dashboard = ({ ...props }) => {
  const socket = useContext(SocketContext);

  socket.on("clock", () => {
    navigate("app/clock");
  });

  socket.on("weather", () => {
    navigate("app/weather");
  });

  socket.on("calendar", () => {
    navigate("app/calendar");
  });

  socket.on("verse", () => {
    navigate("app/daily-verse");
  });

  return (
    <Center h="80vh">
      <SimpleGrid columns={2} spacing={5}>
        <ModuleLink name="Clock" icon={FiClock} to="clock" />
        <ModuleLink name="Weather" icon={FiClock} to="weather" />
        <ModuleLink
          socket={socket}
          name="Calendar"
          icon={FiCalendar}
          to="calendar"
        />
        <ModuleLink name="Daily Verse" icon={FiBookOpen} to="daily-verse" />
      </SimpleGrid>
    </Center>
  );
};

const LinkIcon = ({ icon }) => {
  return <Icon mr="24px" w="40px" h="40px" as={icon} />;
};

export default AppScreen;
