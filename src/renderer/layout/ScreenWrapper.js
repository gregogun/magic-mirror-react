import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenWrapper = ({ children }) => {
  return (
    <Box
      cursor="none"
      p="8px"
      display="grid"
      placeItems="center"
      w="100vw"
      h="100vh"
    >
      {children}
    </Box>
  );
};

export default ScreenWrapper;
