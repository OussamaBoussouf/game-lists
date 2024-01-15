import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, Box } from "@chakra-ui/react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <Box pos="relative" w="80%">
      <Input
        backgroundColor="#eaeaea"
        ps="10"
        py="2"
        borderRadius="full"
        type="search"
        placeholder="Search games..."
      />
      <Search2Icon pos="absolute" top="32%" left="1.5%" zIndex="2" />
    </Box>
  );
};

export default SearchBar;
