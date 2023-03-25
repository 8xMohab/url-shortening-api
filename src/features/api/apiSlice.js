import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://t.ly/api/v1/link/shorten",
  }),
  endpoints: (builder) => ({
    shortenLink: builder.mutation({
      query: (url) => ({
        url: ``,
        method: "POST",
        body: {
          long_url: url,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          api_token: import.meta.env.VITE_API_KEY,
        },
      }),
    }),
  }),
});

export const { useShortenLinkMutation } = apiSlice;
export default apiSlice;
