let NumberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?");
        };
    },
    RememberMyFilm: function() {
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
    },
    DetectPersonalLevel: function() {
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
    },
    ShowMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    WriteYourGenre: function() {
        for (i = 1; i <= 3; i++) {
            const genre = prompt(`Який ваш улюблений жанр ${i}`);
            if (genre === ' ' || genre == null) {
                console.log("Ви ввели некоректні данні");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш уюлблений жанр ${i+1}- це ${item}`);
        });
    },
    toggleVisiblyMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};


console.log(personalMovieDB);