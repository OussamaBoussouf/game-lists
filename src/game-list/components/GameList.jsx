import { Grid } from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";
import GameCard from "./GameCard";

export const GameList = ({ games }) => {
  return (
    <Grid
      templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap="8"
      py="8"
    >
      {games.length != 0 ? (
        games.map((ele) => (
          <GameCard
            key={ele.id}
            imageSrc={ele.background_image}
            name={ele.name}
            rate={ele.metacritic}
            platforms={ele.parent_platforms}
            totalReviews={ele.reviews_count}
          />
        ))
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
