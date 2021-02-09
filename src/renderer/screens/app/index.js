import React, { useState, useEffect } from "react";
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
  Fade,
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
import { FiCalendar, FiBookOpen } from "react-icons/fi";
import { Clock, Weather } from "../../modules";
import Test from "../../modules/Test";

const AppScreen = () => {
  const source = createMemorySource("/app");
  const history = createHistory(source);

  return (
    <ScreenWrapper>
      <Stack spacing={8} p="8px" w="100%" h="100%">
        <Fade in={true}>
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
                <Test path="test" />
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
          {name}
        </LinkOverlay>
      </Heading2>
    </LinkBox>
  );
};

const Dashboard = ({ ...props }) => {
  return (
    <Stack p={16} mx="auto" w="80%" spacing={4}>
      <ModuleLink name="Calendar" icon={FiCalendar} to="calendar" />
      <Line />
      <ModuleLink name="Daily Verse" icon={FiBookOpen} to="daily-verse" />
    </Stack>
  );
};

const LinkIcon = ({ icon }) => {
  return <Icon mr="24px" w="32px" h="32px" as={icon} />;
};

export default AppScreen;
