import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Header = ({ children, ...props }) => {
  return (
    <Flex {...props} justify="space-between" as="header">
      {children}
    </Flex>
  );
};

export default Header;
