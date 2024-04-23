import { ChakraProvider, Box, Flex, Container, Spacer } from "@chakra-ui/react";
// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const customBreakpoints = {
  base: "0px",
  sm: "500px",
  md: "700px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
// 3. Extend the theme
const theme = extendTheme({
  breakpoints: customBreakpoints,
});
import Navbar from "./navbar/Navbar";
import Genre from "./game-genre/Genre";
import Games from "./game-list/Games";
import { createContext, useContext, useEffect, useState } from "react";
import axiosGame from "./services/api-games";
import { GamesProvider } from "./contexts/gamesContext";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="1500px">
        <ThemeProvider>
          <GamesProvider>
            <Navbar />
            <Flex flexDirection={{ base: "column", md: "row" }}>
              <Box flex="1">
                <Genre />
              </Box>
              <Box flex="3">
                <Games />
              </Box>
            </Flex>
          </GamesProvider>
        </ThemeProvider>
      </Container>
    </ChakraProvider>
  );
}

export default App;
