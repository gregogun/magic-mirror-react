import React from "react";
import { Heading } from "@chakra-ui/react";

export const Heading1 = ({ children, ...props }) => {
  return (
    <Heading {...props} fontSize="10xl" fontWeight="thin">
      {children}
    </Heading>
  );
};

export const Heading2 = ({ children, ...props }) => {
  return (
    <Heading {...props} fontSize="6xl" fontWeight="light">
      {children}
    </Heading>
  );
};
