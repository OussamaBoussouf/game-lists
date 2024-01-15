import axiosGame, { CanceledError } from "../services/api-games";

export function useGames(){
        const controller = new AbortController();
        axiosGame
          .get("games?key=5a8755bf323149d59864761cd68ff76c", {
            signal: controller.signal,
          })
          .then(({ data }) => {
            if (error != "") setError("");
            return{games: data.results};
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            return err.message;
          });
}