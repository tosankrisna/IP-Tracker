import useSWR from "swr";

export const useFetch = (value: string) => {
  const endpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_GEO_IFY_API_KEY}&ipAddress=${value}`;

  const fetcher = (endpoint: string) =>
    fetch(endpoint).then((res) => res.json());
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
