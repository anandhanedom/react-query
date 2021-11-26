import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchColors = async (pageNumber) => {
  const res = await axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
  );
  return res.data;
};

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    { keepPreviousData: true }
  );

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
      <div>
        <button
          onClick={() => setPageNumber((prevCount) => prevCount - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNumber((prevCount) => prevCount + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
      {isFetching && "Loading..."}
    </div>
  );
};
