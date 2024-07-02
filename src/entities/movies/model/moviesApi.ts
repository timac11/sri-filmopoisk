// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilterState } from '@entities/filter/model/filterSlice.ts';

import { MoviesResponse } from './types';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030' }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, string>({
      query: (filter: FilterState) => `/api/v1/search`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = moviesApi;
