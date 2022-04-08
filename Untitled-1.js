const NumberOfFilms = +prompt("Скільки фільмів ви вже подивились?");
const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    gender: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("ОДин із останніх переглянутих фільмів?", ""),
        b = prompt("на скільки оціните його?", "");


    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
if (personalMovieDB.count < 10) {
    console.log("Переглянуто доволі мало фільмів");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("ВИ класичний глядач");
}
if (personalMovieDB.countЮ30) {
    console.log("Ви кіноман");
} else {
    console.log('error')
}

console.log(personalMovieDB);