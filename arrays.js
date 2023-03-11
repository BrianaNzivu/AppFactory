//NodeJs module (package of the same name)

const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//Prompting with the question function in the readline API
input.question('What is your name?', (answer) =>{
    console.log(answer)

//No REPL behaviour(Preventing a loop)
if(answer) {
    input.close()
}

})



// -------------------------------- simple arrays-----------------------------
// creating an array
let movies = [
    'Star Wars: The Phantom Menance',
    'Teminator 2',
    'Kill Bill: Vol 2',
    'Inglorious Bastards',
]

console.log(movies)

//access a certain index in an array
const firstMovie = movies[0]
const secondMovie = movies[1]

console.log(firstMovie)

// Adding an object in the middle of an array
const middle = Math.floor(movies.length/2)
movies[middle] = 'Ironman'

// Arrays with multiple data types
const misc = [
    'Ironman 2',
    {name : 'Micheal'},
    9, 
    () => 'foo',
    movies,
]

console.log(misc)

// ------------------ array operations------------------------
// merging arrays
const moreMovies = ['Top Gun: Maverick', 'Tenet', ...movies].map((movies) => 
movies.toUpperCase(),
)

console.log(moreMovies)