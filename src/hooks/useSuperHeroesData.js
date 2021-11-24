import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = async () => {
  const res = await axios.get("http://localhost:4000/superheroes");
  return res.data;
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes",
    fetchSuperheroes,
    // {
    //   cacheTime: 300000, // default
    //   staleTime: 0, // default
    //   refetchOnMount: true, // default
    //   refetchOnWindowFocus: true, // default
    //   refetchInterval: false, // default - provide ms here
    //   refetchIntervalInBackground: false, // default
    // }
    // {
    //   enabled: false,
    // }
    {
      onSuccess,
      onError,
      // select: (data) => {
      //   const superHeroNames = data.map((hero) => hero.name);
      //   return superHeroNames;
      // },
    }
  );
};
