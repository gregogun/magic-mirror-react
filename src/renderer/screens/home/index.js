import React from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import ScreenWrapper from "../../layout/ScreenWrapper";
import { Link } from "@reach/router";
import { Heading1, Heading2 } from "../../components";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <LinkBox display="grid" placeItems="center" w="100%" h="100%">
        <Stack alignItems="center" spacing={4}>
          <Heading1>Hello Tina</Heading1>
          <Text>
            <LinkOverlay as={Link} to="/app">
              Tap anywhere to begin
            </LinkOverlay>
          </Text>
          <Box bg="#fff" w="30px" h="30px" rounded="full" />
        </Stack>
      </LinkBox>
    </ScreenWrapper>
  );
};

export default HomeScreen;
