let NumberOfFilms;
const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function Start() {
    NumberOfFilms = prompt("Скільки фільмів ви вже подивились?");
    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms));
}
Start();

function RememberMyFilm() {
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
}

RememberMyFilm();

function DetectPersonalLevel() {
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
}

DetectPersonalLevel();

function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
ShowMyDB(personalMovieDB.privat);

function WriteYourGenre() {
    for (i = 1; i <= 3; i++) {
        const genre = prompt(`Який ваш улюблений жанр ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

WriteYourGenre();
console.log(personalMovieDB);