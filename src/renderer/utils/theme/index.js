import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        overflow: "hidden",
        cursor: "none",
        color: "#fff",
        bg: "#000",
      },
      a: {
        cursor: "none",
        _hover: {
          textDecoration: "none",
          cursor: "none",
        },
      },
    }),
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    digital: "DS-Digital, sans-serif",
  },
  fontSizes: {
    "7xl": "80px",
    "8xl": "96px",
    "10xl": "112px",
    "11xl": "128px",
  },
});

export default theme;
