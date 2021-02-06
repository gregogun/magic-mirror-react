import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        overflow: "hidden",
        color: "#fff",
        bg: "#000",
      },
    }),
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    choice2: "Poppins, sans-serif",
    choice3: "Roboto Mono, monospace",
  },
});

export default theme;
