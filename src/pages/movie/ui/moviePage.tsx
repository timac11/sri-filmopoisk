import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '@entities/movies/model/movieApi.ts';
import { MovieFullCard } from '@widgets/movieCard/ui/fullCard/movieFullCard.tsx';
import { ActorsContainer } from '@widgets/actorsContainer/ui/actorsContainer.tsx';

export const MoviePage: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieQuery(id);

  if (isLoading && !data) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <MovieFullCard item={data} />
      <ActorsContainer items={data.actors} />
    </div>
  );
};
