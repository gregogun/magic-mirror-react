import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Footer = ({ children }) => {
  return (
    <Flex position="absolute" bottom="16px" justify="space-between" as="footer">
      {children}
    </Flex>
  );
};

export default Footer;
