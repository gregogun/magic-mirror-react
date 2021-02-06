import React from "react";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import ScreenWrapper from "../../layout/ScreenWrapper";
import { Link } from "@reach/router";
import { Heading1 } from "../../components";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <Box display="grid" placeItems="center" bg="#222" w="100%" h="100%">
        <Stack textAlign="center" spacing={4}>
          <Heading1>Hello User</Heading1>
          <Text>Tap here to begin</Text>
          <Link to="/app">&rarr;</Link>
        </Stack>
      </Box>
    </ScreenWrapper>
  );
};

export default HomeScreen;
