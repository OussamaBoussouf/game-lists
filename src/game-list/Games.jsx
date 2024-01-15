import React, { useContext, useEffect, useState } from "react";
import axiosGames, { CanceledError } from "../services/api-games";
import { Text, Heading, Grid, Box } from "@chakra-ui/react";
import PlatformFilter from "./components/PlatformFilter";
import OrderBy from "./components/OrderBy";
import GameCard from "./components/GameCard";
import CardSkeleton from "./components/CardSkeleton";
import { GameContext } from "../App";
// import { useGameContext } from "../contexts/GameContext";

const Games = () => {
  const {gamesList, gameGenre} = useContext(GameContext);
  const [error, setError] = useState("");
  console.log('RENDER GAMES');

  return (
    <>
      <Heading as="h1" size="2xl" mb="5">
        {gameGenre !== null ? gameGenre : null} Games
      </Heading>
      <PlatformFilter />
      <OrderBy />
      {gamesList.length != 0 ? (
        <>
          {error != "" && <Text color="tomato">{error}</Text>}
          <Grid
            templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap="8"
            py="8"
          >
            {gamesList.map((ele) => (
              <GameCard
                key={ele.id}
                imageSrc={ele.background_image}
                name={ele.name}
                rate={ele.metacritic}
                platforms={ele.parent_platforms}
              />
            ))}
          </Grid>
        </>
      ) : (
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap="8"
          py="8"
        >
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Grid>
      )}
    </>
  );
};

export default Games;
