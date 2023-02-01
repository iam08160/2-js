let favoriteMovies = "Empire Strikes Back, Captain America: The Winter Soldier, Thor: Ragnarock, Caddyshack, Christmas Vacation "
console.log(favoriteMovies)

let firstMovie = favoriteMovies.slice(0 , 19)
console.log(firstMovie)

let secondMovie = favoriteMovies.slice(20 , 56)
console.log(secondMovie)

firstMovie = firstMovie.slice(0 , 19) +firstMovie.charAt(firstMovie.length -1).toUpperCase(19)