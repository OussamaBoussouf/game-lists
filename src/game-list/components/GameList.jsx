import { Grid } from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";
import { useGames } from "../../contexts/gamesContext";

export const GameList = () => {
  const { games } = useGames();

  return (
    <Grid
      templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gridColumnGap="8"
      py="8"
    >
      {games.length != 0 ? (
        <>
          {games.map((ele) => (
            <GameCard
              key={ele.id}
              akey={ele.id}
              imageSrc={ele.background_image}
              name={ele.name}
              rate={ele.metacritic}
              platforms={ele.parent_platforms}
              totalReviews={ele.ratings_count}
            />
          ))}
        </>
      ) : (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
    </Grid>
  );
};
