// import { createContext, useContext, useEffect, useState } from "react";
// import axiosGame ,{CanceledError} from "../services/api-games";

// const GameContext = createContext(null);

// export function GameContextProvider({ children }) {

//   const [gamesList, setGamesList] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();
//     axiosGame
//       .get("games?key=5a8755bf323149d59864761cd68ff76c", {
//         signal: controller.signal,
//       })
//       .then(({ data }) => {
//         if (error != "") setError("");
//         setGamesList(data.results);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setGamesList([]);
//         setError(err.message);
//       });

//     return () => controller.abort();
//   }, []);


//   //FETCH GENRES
//   const fetchGenre = (type) => {
//     const controller = new AbortController();
//     axiosGame.get("games?key=5a8755bf323149d59864761cd68ff76c", {
//       signal: controller.signal,
//     })
//     .then(({data})=>{
//       setGamesList(
//         data.results.filter((ele) => {
//           for (let i = 0; i < ele.genres.length; i++) {
//             if (ele.genres[i].name === type) {
//               return ele;
//             }
//           }
//         })
//       )
//     })
//     .catch((err)=>{
//         if(err instanceof CanceledError) return;
//         console.log(err);
//     })
//   };

//   useEffect(()=>{
//     console.log(gamesList);
//   }, [gamesList])

//   return <GameContext.Provider value={{gamesList, fetchGenre}}>{children}</GameContext.Provider>;
// }

// export const useGameContext = () => {
//   const context = useContext(GameContext);

//   if (!context) {
//     throw Error("useContext should be used within a GameContextProvider");
//   }

//   return context;
// };
