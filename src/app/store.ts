import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../entities/filter/index.ts'
import {moviesApi} from "../entities/movies";
import {movieApi} from "../entities/movies/model/movieApi.ts";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    moviesApi.middleware,
    movieApi.middleware
  ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
