import { useContext, createContext } from "react";
import { useGamesSource } from "../hooks/useGames";

const GamesContext = createContext(null);

export function useGames() {
  return useContext(GamesContext);
}

export const GamesProvider = ({ children }) => {
  return (
    <GamesContext.Provider value={useGamesSource()}>
      {children}
    </GamesContext.Provider>
  );
};