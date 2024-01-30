import { useContext, useEffect, useState } from "react";
import axiosGames, { CanceledError } from "../services/api-games";
import { Text, Heading, Grid, Box, Flex } from "@chakra-ui/react";
import PlatformFilter from "./components/PlatformFilter";
import OrderBy from "./components/OrderBy";
import { GameList } from "./components/GameList";
import CardSkeleton from "./components/CardSkeleton";
import { useGames } from "../hooks/useGames";
import { useTheme } from "../hooks/useTheme";

const Games = () => {
  const { games, genre, search } = useGames();
  const { lightMode } = useTheme();

  return (
    <>
      <Heading
        as="h1"
        size={{ base: "lg", md: "xl", lg:"2xl" }}
        mb="5"
        color={lightMode ? null : "#e9e9e9"}
      >
        {genre ? genre : null} Games
      </Heading>
      <Flex flexDirection={{base:"column", sm:"row"}} align="flex-start" >
        <PlatformFilter />
        <OrderBy />
      </Flex>
      {games.length === 0 && search !== "" ? (
        <Text fontSize="2xl" my="5">
          No Result...
        </Text>
      ) : (
        <GameList games={games} />
      )}
    </>
  );
};

export default Games;
