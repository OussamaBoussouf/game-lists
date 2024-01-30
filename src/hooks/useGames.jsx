import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import axiosGame, { CanceledError } from "../services/api-games";

const api_key = process.env.REACT_APP_API_KEY;

export function useGamesSource() {
  const [{ games, genre, platform, search, orderedBy }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setGames":
          return { ...state, games: action.payload };
        case "setGenre":
          return { ...state, genre: action.payload };
        case "setPlatform":
          return { ...state, platform: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
        case "setOrderBy":
          return {...state, orderedBy: action.payload}  
      }
    },
    { games: [], genre: "", platform: "", search: "", orderedBy: "" }
  );

  const controller = new AbortController();

  useEffect(() => {
    axiosGame
      .get(`games?key=${api_key}`, {
        signal: controller.signal,
      })
      .then(({ data }) => dispatch({ type: "setGames", payload: data.results }))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        return err.message;
      });
  }, []);

  const filteredGames = useMemo(() => {
    if (genre === "" && platform === "") return games;

    if (genre !== "" && platform !== "") {
      return games.filter((ele) => {
        for (let i = 0; i < ele.genres.length; i++) {
          if (ele.genres[i].name === genre) {
            for (let j = 0; j < ele.parent_platforms.length; j++) {
              if (ele.parent_platforms[j].platform.slug === platform) {
                return ele;
              }
            }
          }
        }
      });
    }

    if (platform !== "" && genre === "") {
      return games.filter((ele) => {
        for (let i = 0; i < ele.parent_platforms.length; i++) {
          if (ele.parent_platforms[i].platform.slug === platform) {
            return ele;
          }
        }
      });
    }

    return games.filter((ele) => {
      for (let i = 0; i < ele.genres.length; i++) {
        if (ele.genres[i].name === genre) {
          return ele;
        }
      }
    });
  }, [games, genre, platform]);


  const filteredGamesByOrder = useMemo(()=>{
    switch (orderedBy) {
      case 'average rating':
           return [...filteredGames].sort((a,b) => b.rating - a.rating);
      case 'name':
           return [...filteredGames].sort((a,b) => a.slug.localeCompare(b.slug));
      case 'release date':
           return [...filteredGames].sort((a,b) => {
            a = new Date(a.released).getTime();
            b = new Date(b.released).getTime();
            return b - a;
          });
      case 'popularity':
           return [...filteredGames].sort((a,b) => b.ratings_count - a.ratings_count);
      default:
          return filteredGames;
    }
  }, [filteredGames ,orderedBy]);
  
  const searchedGames = useMemo(() => {
    return [...filteredGamesByOrder].filter((ele) =>
      ele.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filteredGamesByOrder]);

  

  const setGenre = useCallback((genre) => {
    dispatch({
      type: "setGenre",
      payload: genre,
    });
  }, []);

  const setPlatform = useCallback((platform) => {
    dispatch({
      type: "setPlatform",
      payload: platform,
    });
  }, []);

  const setSearch = useCallback((search) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const setOrderBy = (order) => {
    dispatch({
      type: "setOrderBy",
      payload: order
    })
  };



  return {
    games: searchedGames,
    setGenre,
    setPlatform,
    setSearch,
    setOrderBy,
    genre,
    search,
  };
}

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
