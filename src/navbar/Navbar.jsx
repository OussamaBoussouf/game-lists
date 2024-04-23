import SearchBar from "./components/SearchBar";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Switch,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { useTheme } from "../contexts/themeContext";

const Navbar = () => {
  

  const { lightMode, setLightMode } = useTheme();

  lightMode
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "#111111");

  return (
    <nav>
      <Flex align="center" justify="space-between" py="7">
        <Box>
          <Link href="/">
            <Text
              fontWeight="extrabold"
              letterSpacing="0.2em"
              fontSize="xl"
              color={lightMode ? "black" : "white"}
            >
              RAWG
            </Text>
          </Link>
        </Box>
        <SearchBar />

        <Flex align="center">
          {lightMode ? (
            <MoonIcon fontSize="xl" />
          ) : (
            <SunIcon fontSize="xl" color="white" />
          )}
          <Switch
            colorScheme="green"
            ms="2"
            onChange={() => setLightMode(!lightMode)}
          />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
