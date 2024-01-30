import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import { useTheme } from "../../hooks/useTheme";
import { ChevronDownIcon } from "@chakra-ui/icons";

const arrangeBy = ['Name', 'Average rate', 'Release date', 'Popularity'];
let selected = "Popularity";

const OrderBy = () => {
  const { setOrderBy } = useGames();
  const {lightMode} = useTheme();

  return (
    <Menu>
      <MenuButton
        color={lightMode ? "black" : "#e9e9e9"}
        bg={lightMode ? "#eaeaea": "#202020"}
        _hover={{ bg: lightMode ? "gray.200": "#303030" }}
        _expanded={{ bg: lightMode ? "gray.400" : "#414141" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Order by: {selected}
      </MenuButton>
      <MenuList
        bg={lightMode ? "#eaeaea" : "#202020"}
        borderColor={lightMode && "gray"}
      >
        {arrangeBy.map((ele, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              selected = ele;
              setOrderBy(ele.toLowerCase())
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

export default OrderBy;
