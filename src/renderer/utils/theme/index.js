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
  fontSizes: {
    "7xl": "80px",
    "8xl": "96px",
    "10xl": "112px",
    "11xl": "128px",
  },
});

export default theme;
