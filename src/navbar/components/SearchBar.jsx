import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, Box } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import { useTheme } from "../../hooks/useTheme";

const SearchBar = () => {

  const {setSearch} = useGames();
  const {lightMode} = useTheme();

  return (
    <Box pos="relative" w={{base:"50%", sm:"70%", lg:"80%"}}>
      <Input
        backgroundColor={lightMode ? "#eaeaea" : "#181818"}
        border="0"
        ps="10"
        py="2"
        borderRadius="full"
        type="search"
        placeholder="Search games..."
        onChange={(e) => setSearch(e.target.value)}
        color={lightMode ? null : "#eaeaea"}
      />
      <Search2Icon color={lightMode ? null : "#e9e9e9"} pos="absolute" top="32%" left="15px" zIndex="2" />
    </Box>
  );
};

export default SearchBar;
