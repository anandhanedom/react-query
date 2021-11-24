import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effects after data fetching", data);
  };

  const onError = (err) => {
    console.log("Perform side effects after encountering an error", err);
  };

  const { isLoading, data, isError, error, refetch, isFetching } =
    useSuperHeroesData(onSuccess, onError);

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
      {/* {data && data.map((hero) => <div key={hero.name}>{hero.name}</div>)} */}
      {data && data.map((hero) => <div key={hero}>{hero}</div>)}
    </>
  );
};
