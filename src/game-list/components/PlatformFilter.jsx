import React, { useContext, useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { useGames } from "../../contexts/gamesContext";
import { useTheme } from "../../contexts/themeContext";
import { ChevronDownIcon } from "@chakra-ui/icons";

const platforms = ["Pc", "Xbox", "Playstation", "Mac", "Android"];
let selectedPlatform = "";

const PlatformFilter = () => {
  const { setPlatform } = useGames();
  const { lightMode } = useTheme();

  return (
    <Menu>
      <MenuButton
        color={lightMode ? "black" : "#e9e9e9"}
        bg={lightMode ? "#eaeaea" : "#202020"}
        _hover={{ bg: lightMode ? "gray.200" : "#303030" }}
        _expanded={{ bg: lightMode ? "gray.400" : "#414141" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        mb={{ base: "5", sm: "0" }}
        me={{ sm: "5" }}
      >
        {selectedPlatform != "" ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList
        bg={lightMode ? "#eaeaea" : "#202020"}
        borderColor={lightMode && "gray"}
      >
        {platforms.map((ele, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              selectedPlatform = ele;
              setPlatform(ele.toLowerCase());
            }}
            _hover={{ bg: lightMode ? "gray.400" : "#414141" }}
            bg={lightMode ? "#eaeaea" : "#202020"}
            color={lightMode ? "black" : "#e9e9e9"}
          >
            {ele}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
