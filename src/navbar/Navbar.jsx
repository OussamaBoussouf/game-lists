import React from "react";
import SearchBar from "./components/SearchBar";
import { Flex, Container, Switch, Text, Box } from "@chakra-ui/react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
        <Flex align="center" justify="space-between" py="7">
          <Box>Logo</Box>
          <SearchBar />
          <Box>
            <Flex align="center">
              <Switch colorScheme="teal" me="3"/>
              <Text>Dark mode</Text>
            </Flex>
          </Box>
        </Flex>
    </nav>
  );
};

export default Navbar;
