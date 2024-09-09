let movies = [
    { title: "House of cards", director: "Kevin Spacey", year: 2013 },
    { title: "Game of Thrones", director: "Joe Doe", year: 2011 },
    { title: "Vikings", director: "Jordan Smith", year: 2010 },
    { title: "King of the South", director: "Sam Williams", year: 2015 }
]

function showMovies(movies) {
    movies.map((movie) => {
        if (movie.year > 2000) {
            console.log(movie.title)
        }
    })
}
showMovies(movies)