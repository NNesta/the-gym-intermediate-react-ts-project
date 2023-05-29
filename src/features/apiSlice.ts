import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { sourceType, dataType } from "../Type";

const today = new Date();

const KEY = "9898f7aecfb84ac9b602ae868ddfa004";
// const KEY = import.meta.env.REACT_APP_KEY;
// const URL = import.meta.env.REACT_APP_URL;
const URL = "https://news-proxy.netlify.app/api/";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: ({ category, publisher }) =>
        `everything?q=${category}&sources=${
          publisher ? publisher : ""
        }&to=${today.toISOString()}&sortBy=publishedAt&apiKey=${KEY}`,
      transformResponse: (response: dataType) => {
        return response;
      },
    }),
    getAllTrendingNews: builder.query({
      query: (category) =>
        `top-headlines?q=${category}&to=${today.toISOString()}&sortBy=publishedAt&apiKey=${KEY}`,
      transformResponse: (response: dataType) => {
        return response;
      },
    }),
    getAllPublishers: builder.query({
      query: () => `top-headlines/sources?apiKey=${KEY}`,
      transformResponse: (response: { sources: sourceType[] }) => {
        return response;
      },
    }),
  }),
});
export const {
  useGetAllNewsQuery,
  useGetAllTrendingNewsQuery,
  useGetAllPublishersQuery,
} = newsApi;
