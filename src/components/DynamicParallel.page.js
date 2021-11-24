import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = async (heroId) => {
  const res = await axios.get(`http://localhost:4000/superheroes/${heroId}`);
  return res.data;
};

export const DynamicParallelQueriesPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log({ queryResults });

  return <div>Parallel Queries Page</div>;
};
