// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// function App(props) {
const App = props => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("runs");
    fetch('/api/movies')
      .then(response => response.json())
      // .then(json => console.log(json))
      // .then(response => {console.log(response.json());})
      .then(json => {
        // const movies = json;
        // console.log(json);
        // console.log(json[0]);
        setMovies(
          json.map((movie, index) => ({
            // console.log(movie);
            // console.log(movie.title);
            title: movie.title,
            genre: movie.genre,
            id: index + 1
          }))
        );
        // console.log(movies);
      })
      .catch(error => console.log(error))
  }, []);

  // console.log(movies);

  // const renderMovies = () => {
  //   // return movies
  //   console.log(movies);
  //   console.log(movies[0]);
  //   if (movies[0] != undefined) {
  //     console.log(movies[0].title);
  //     return movies.map(movie => <h1 key={movie.id}>{movie.title}</h1>)
  //   }
  // }

  let content;
  if (movies[0] != undefined) {
    content = (
      <div>
       { movies.map(movie => (
         <h1 key={movie.id}>
           {movie.title}
         </h1>
       ))}
      </div>
    );
    console.log(content);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello World</p>

        <div>
          { content }
        </div>
        
      </header>

    </div>
  );
}

export default App;
