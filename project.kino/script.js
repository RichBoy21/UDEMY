// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько оцените его?", "");
// const с = prompt("Один из последних просмотренных фильмов?", "");
// const в = prompt("На сколько оцените его?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
