import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import Screens from "./screens";
import SocketContext from "./utils/context/socketContext";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8888/");

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SocketContext.Provider value={socket}>
        <Screens />
      </SocketContext.Provider>
    </ChakraProvider>
  );
};

export default App;
