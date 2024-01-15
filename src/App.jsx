import "./App.css";

import { ChakraProvider, Box, Flex, Container, Spacer } from "@chakra-ui/react";

import Navbar from "./navbar/Navbar";
import Genre from "./game-genre/Genre";
import Games from "./game-list/Games";
// import { GameContextProvider } from "./contexts/GameContext";
import { createContext, useContext, useEffect, useState } from "react";
import axiosGame from "./services/api-games";
import { useGames } from "./hooks/useGames";

export const GameContext = createContext(null);

let gameGenre = null;

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [error, setError] = useState("");

  //FETCH GAMES
  useEffect(() => {
    const controller = new AbortController();
    axiosGame
      .get("games?key=5a8755bf323149d59864761cd68ff76c", {
        signal: controller.signal,
      })
      .then(({ data }) => {
        if (error != "") setError("");
        setGamesList(data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGamesList([]);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  //CHANGE PLATFORM
  const onChangePlatform = (platform) => {
      setGamesList(
        gamesList.filter((ele) => {
          for (let i = 0; i < ele.parent_platforms.length; i++) {
            if (ele.parent_platforms[i].platform.slug === platform) {
              return ele;
            }
          }
        })
      );
  };

  //FETCH GENRE
  const fetchGenre = (type) => {
    const controller = new AbortController();
    axiosGame
      .get("games?key=5a8755bf323149d59864761cd68ff76c", {
        signal: controller.signal,
      })
      .then(({ data }) => {
        gameGenre = type;
        setGamesList(
          data.results.filter((ele) => {
            for (let i = 0; i < ele.genres.length; i++) {
              if (ele.genres[i].name === type) {
                return ele;
              }
            }
          })
        );
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err);
      });
  };

  return (
    <ChakraProvider>
      <Container maxW="1500px">
        <Navbar />
        <Flex>
          <Box flex="1">
            <GameContext.Provider value={{ fetchGenre }}>
              <Genre />
            </GameContext.Provider>
          </Box>
          <Box flex="3">
            <GameContext.Provider value={{ gamesList, gameGenre, onChangePlatform }}>
              <Games />
            </GameContext.Provider>
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
