import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroData = async ({ queryKey }) => {
  const heroId = queryKey[1];
  const res = await axios.get(`http://localhost:4000/superheroes/${heroId}`);
  return res.data;
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient(heroId);

  return useQuery(["super-hero", heroId], fetchSuperHeroData, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
