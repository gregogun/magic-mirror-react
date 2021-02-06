import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Main = ({ children, ...props }) => {
  return (
    <Box {...props} as="main" p="8px" w="100%">
      {children}
    </Box>
  );
};

export default Main;
