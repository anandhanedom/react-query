import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = async () => {
  const res = await axios.get("http://localhost:4000/superheroes");
  return res.data;
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperheroes);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data && data.map((hero) => <div key={hero.name}>{hero.name}</div>)}
    </>
  );
};
