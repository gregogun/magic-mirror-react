import React from "react";
import { Icon, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { Heading2 } from "../components";
import { FiArrowLeft } from "react-icons/fi";
import { Link as ReachLink } from "@reach/router";
import Footer from "../layout/Footer";

const ReturnIcon = ({ ...props }) => {
  return <Icon {...props} w="24px" h="24px" as={FiArrowLeft} />;
};

const Test = () => {
  return (
    <>
      <Stack p={16} mx="auto" w="80%" spacing={4}>
        <Heading2>Test a new module!</Heading2>
      </Stack>
      <Footer>
        <Link as={ReachLink} to="/app">
          <IconButton
            variant="ghost"
            _hover={{ variant: "ghost" }}
            icon={<ReturnIcon />}
          />
        </Link>
      </Footer>
    </>
  );
};

export default Test;
