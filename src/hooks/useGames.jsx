import { useEffect, useReducer, useCallback, useMemo } from "react";
import axiosGame, { CanceledError } from "../services/api-games";

const api_key = process.env.REACT_APP_API_KEY;

export function useGamesSource() {
  const [{ games, genre, platform, search, orderedBy }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setGames":
          return { ...state, games: action.payload };
        case "setPlatform":
          return { ...state, platform: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
        case "setOrderBy":
          return { ...state, orderedBy: action.payload };
      }
    },
    { games: [], genre: "", platform: "", search: "", orderedBy: "" }
  );

  useEffect(() => {
    axiosGame
      .get(`games?key=${api_key}`)
      .then(({ data }) => dispatch({ type: "setGames", payload: data.results }))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        return err.message;
      });
  }, []);

  function filterPlatform(device) {
    return games.filter((ele) => {
      for (let i = 0; i < ele.parent_platforms.length; i++) {
        if (ele.parent_platforms[i].platform.slug === device) {
          return ele;
        }
      }
    });
  }

  //FILTER GAMES BY PLATFORM
  const filteredGamesByPlatform = useMemo(() => {
    switch (platform) {
      case "pc":
        return filterPlatform("pc");
      case "xbox":
        return filterPlatform("xbox");
      case "playstation":
        return filterPlatform("playstation");
      case "mac":
        return filterPlatform("mac");
      case "android":
        return filterPlatform("android");
      default:
        return games;
    }
  }, [genre, platform, games]);

  //RESULT OF FILTERED GAMES BY ORDER
  const filteredGamesByOrder = useMemo(() => {
    switch (orderedBy) {
      case "average rating":
        return [...filteredGamesByPlatform].sort((a, b) => b.rating - a.rating);
      case "name":
        return [...filteredGamesByPlatform].sort((a, b) =>
          a.slug.localeCompare(b.slug)
        );
      case "release date":
        return [...filteredGamesByPlatform].sort((a, b) => {
          a = new Date(a.released).getTime();
          b = new Date(b.released).getTime();
          return b - a;
        });
      case "popularity":
        return [...filteredGamesByPlatform].sort(
          (a, b) => b.ratings_count - a.ratings_count
        );
      default:
        return filteredGamesByPlatform;
    }
  }, [filteredGamesByPlatform, orderedBy]);

  //RESULT OF SEARCHED GAMES
  const searchedGames = useMemo(() => {
    return [...filteredGamesByOrder].filter((ele) =>
      ele.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filteredGamesByOrder]);


  //DISPTACH ACTIONS
  const setGenre = (genre) => {
    dispatch({ type: "setGames", payload: [] });
    axiosGame
      .get(`games?key=${api_key}`)
      .then(({ data }) => data.results)
      .then((games) => {
        const filteredGames = games.filter((ele) => {
          for (let i = 0; i < ele.genres.length; i++) {
            if (ele.genres[i].name === genre) {
              return ele;
            }
          }
        });
        dispatch({ type: "setGames", payload: filteredGames });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        return err.message;
      })
  };

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
      payload: order,
    });
  };
  /*======================================= */

  return {
    games: searchedGames, //searchedGames,
    setGenre,
    setPlatform,
    setSearch,
    setOrderBy,
    genre,
    search,
  };
}
