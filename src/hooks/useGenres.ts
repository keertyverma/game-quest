import { useQuery } from "@tanstack/react-query";

import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // auto refresh time
    staleTime: 24 * 60 * 60 * 1000, // 24 hour
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
