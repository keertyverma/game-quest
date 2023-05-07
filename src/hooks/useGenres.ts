import { useQuery } from "@tanstack/react-query";

import genres from "../data/genres";
import { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    // auto refresh time
    staleTime: 24 * 60 * 60 * 1000, // 24 hour
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
