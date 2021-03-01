import React, {useState} from 'react';
import MovieList from '../components/MovieList';
// import Upcoming from '../components/Upcoming';
import BeautifulButton from '../components/BeautifulButton';
import styled from 'styled-components';
import StyledMovieBox from './StyledMovieBox';


const MovieBox = () => {

  const [movies, setMovie] = useState(
    [
      {
        id: 1,
        name: "Spider-Man: Into the Spider-Verse",
        url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
      },
      {
        id: 2,
        name: "Life Itself",
        url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
      },
      {
        id: 3,
        name: "Mary Queen of Scots",
        url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
      },
      {
        id: 4,
        name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
      },
      {
        id: 5,
        name: "Captain Marvel",
        url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
      }
    ]
    )

    return(
      <>
        <StyledMovieBox><h1>Upcoming Film Releases for UK</h1>
        <MovieList id="movieList" movies={movies}/>
        </StyledMovieBox>
        <BeautifulButton></BeautifulButton>
      </>
    )
}

export default MovieBox;