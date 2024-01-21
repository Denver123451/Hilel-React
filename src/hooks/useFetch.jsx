import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setIsError(false);
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const res = await fetch(url, { signal });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        const data = await res.json();
        setData(data);
      } catch (e) {
        console.log(e.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
