import {TRouterConfig} from "../../shared/types/router/routerConfig.ts";
import {EPageId, EPath} from "./paths.ts";
import {MoviesPage} from "../../pages/movies";
import {MoviePage} from "../../pages/movie";

export const routerConfig: TRouterConfig<EPath, EPageId> = {
  [EPageId.MAIN]: {
    path: EPath.MAIN,
    id: EPageId.MAIN,
    Component: MoviesPage,
    guards: [],
  },
  [EPageId.MOVIE]: {
    path: EPath.MOVIE,
    id: EPageId.MOVIE,
    Component: MoviePage,
    parameter: 'id',
    guards: [],
  }
};
