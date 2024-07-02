// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FullMovieInfo } from './types';

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030' }),
  endpoints: (builder) => ({
    getMovie: builder.query<FullMovieInfo, string>({
      query: (id: string) => `/api/v1/movie/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieQuery } = movieApi;
