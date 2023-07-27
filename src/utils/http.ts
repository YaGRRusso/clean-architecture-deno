import { Queries } from "@core/entities/logic/http.entity.ts";

export const getSearchParams = (url: URL): Queries => {
  const queries: Queries = {};
  url.searchParams.forEach((value, key) => {
    queries[key] = value;
  });

  return queries;
};
