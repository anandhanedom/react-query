import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = async () => {
  const res = await axios.get("http://localhost:4000/superheroes");
  return res.data;
};

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effects after data fetching", data);
  };

  const onError = (err) => {
    console.log("Perform side effects after encountering an error", err);
  };

  const { isLoading, data, isError, error, refetch, isFetching } = useQuery(
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
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data && data.map((hero) => <div key={hero.name}>{hero.name}</div>)}
    </>
  );
};
