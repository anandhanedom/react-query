import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = async () => {
  const res = await axios.get("http://localhost:4000/superheroes");
  return res.data;
};

const fetchFriends = async () => {
  const res = await axios.get("http://localhost:4000/friends");
  return res.data;
};

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  console.log(superHeroes, friends);

  return <div>Parallel Queries Page</div>;
};
