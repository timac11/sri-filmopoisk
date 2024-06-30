import {FC} from "react";
import {useParams} from "react-router-dom";
import {useGetMovieQuery} from "../../../entities/movies/model/movieApi.ts";
import {MovieFullCard} from "../../../widgets/movieCard/ui/fullCard/movieFullCard.tsx";

export const MoviePage: FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetMovieQuery(id);

  if (isLoading && !data) {
    return <div>Loading ...</div>
  }

  return <div>
    <MovieFullCard item={data} />
  </div>
}
