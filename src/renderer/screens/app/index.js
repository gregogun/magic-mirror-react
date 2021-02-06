import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  Icon,
  LinkBox,
  LinkOverlay,
  IconButton,
} from "@chakra-ui/react";
import ScreenWrapper from "../../layout/ScreenWrapper";
import {
  createHistory,
  createMemorySource,
  Link as ReachLink,
  LocationProvider,
  navigate,
  Router,
} from "@reach/router";
import Calendar from "../../modules/Calendar";
import DailyVerse from "../../modules/DailyVerse";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import { Heading2 } from "../../components";
import { FiCalendar, FiBookOpen, FiArrowLeft } from "react-icons/fi";
import { Clock, Weather } from "../../modules";
import Footer from "../../layout/Footer";

const AppScreen = () => {
  const source = createMemorySource("/app");
  const history = createHistory(source);
  const [prevLocation, setPrevLocation] = useState(source);

  console.log(prevLocation);

  const goBack = () => {
    navigate(prevLocation);
  };

  return (
    <ScreenWrapper>
      <Stack
        //bg="#222"
        spacing={16}
        p="8px"
        w="100%"
        h="100%"
      >
        <Header>
          <Clock />
          <Weather />
        </Header>
        <Main>
          <LocationProvider history={history}>
            <Router>
              <Dashboard path="/" />
              <Calendar path="calendar" />
              <DailyVerse path="daily-verse" />
            </Router>
          </LocationProvider>
        </Main>
      </Stack>
    </ScreenWrapper>
  );
};

const Line = () => {
  return <Box bg="#fff" w="100%" h="1px" />;
};

const ModuleLink = ({ icon, to, ...props }) => {
  return (
    <LinkBox
      {...props}
      _hover={{
        textDecor: "none",
        boxShadow: " 0 0 0 2px",
        transitionDuration: "350ms",
      }}
      display="flex"
      alignItems="center"
      p="16px"
    >
      <LinkIcon icon={icon} />
      <Heading2>
        <LinkOverlay as={ReachLink} to={to}>
          {to.charAt(0).toUpperCase()}
          {to.slice(1)}
        </LinkOverlay>
      </Heading2>
    </LinkBox>
  );
};

const Dashboard = () => {
  return (
    <Stack mx="auto" w="80%" spacing={4}>
      <ModuleLink icon={FiCalendar} to="calendar" />
      <Line />
      <ModuleLink icon={FiBookOpen} to="daily-verse" />
    </Stack>
  );
};

const LinkIcon = ({ icon }) => {
  return <Icon mr="24px" w="32px" h="32px" as={icon} />;
};

const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="24px" h="24px" as={FiArrowLeft} />;
};

export default AppScreen;
