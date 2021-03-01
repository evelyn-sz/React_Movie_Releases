import './App.css';
import React, {Fragment} from 'react';
import MovieBox from './containers/MovieBox';
import StyledMovieBox from './containers/StyledMovieBox';

function App() {
  return (
    <div className="App">
      <MovieBox/>
      <StyledMovieBox/>
    </div>
  );
}

export default App;
