const NumberOfFilms = +prompt("Скільки фільмів ви вже подивились?");
const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    gender: [],
    privat: false
};
const a = prompt("ОДин із останніх переглянутих фільмів?", ""),
    b = prompt("на скільки оціните його?");
c = prompt("ОДин із останніх переглянутих фільмів?", ""),
    d = prompt("на скільки оціните його?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);