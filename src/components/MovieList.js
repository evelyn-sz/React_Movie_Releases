import React from 'react';
import Movie from '../components/Movie';

const MovieList = ({movies}) => {

  const movieNodes = movies.map(({name, id}) => {
    return <Movie name={name} key={id}>{name}</Movie>
  })

  return(
    <ul>
      {movieNodes}
    </ul>
  )
}

export default MovieList;