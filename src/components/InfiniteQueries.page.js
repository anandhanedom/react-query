import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColors = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
  );
  return res.data;
};

export const InfiniteQueriesPage = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("colors", fetchColors, {
    getNextPageParam: (_, pages) => {
      if (pages.length < 4) return pages.length + 1;
      else return undefined;
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <div>
        {data?.map((color) => (
          <h4 key={color.id}>
            {color.id} - {color.label}
          </h4>
        ))}
      </div>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};
