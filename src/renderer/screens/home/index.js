import React from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  LinkOverlay,
  LinkBox,
  Center,
  Fade,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import ScreenWrapper from "../../layout/ScreenWrapper";
import { Link } from "@reach/router";
import { Heading1, Heading2 } from "../../components";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <LinkBox display="grid" placeItems="center" w="100%" h="100%">
        <Stack alignItems="center" spacing={4}>
          <Heading1>Hello Tina</Heading1>
          <Text fontWeight="light" fontSize="2xl">
            <LinkOverlay as={Link} to="/app">
              Click start on your remote to begin
            </LinkOverlay>
          </Text>
          <PulsingCircle />
        </Stack>
      </LinkBox>
    </ScreenWrapper>
  );
};

const PulsingCircle = () => {
  return (
    <Box
      css={css`
        display: block;
        padding: 16px;
        border-radius: 50%;
        background: hsl(0, 0%, 100%);
        cursor: pointer;
        box-shadow: 0 0 0 rgb(255, 255, 255);
        animation: pulseAnim 2s infinite;

        @keyframes pulseAnim {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
          }
          50% {
            transform: scale(0.5);
            box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.03);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.002);
          }
        }
      `}
    />
  );
};

export default HomeScreen;
