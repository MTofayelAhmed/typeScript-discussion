{
  // key of operator

  type Book = {
    author: string;
    title: string;
    publishYear: number;
  };

type BookType = keyof Book

function getPropertyValue <T,K extends keyof T>(book: T, key: K): T[K]{
return book[key]
}
// type of operator 


const Movie = "Deadpool";
type MovieName = typeof Movie;


const MovieName = {
    title: "Rock On",
    director: "Md Tofayel Ahmed"
    
}


type MovieInfo = typeof MovieName;


const movieDetails: MovieInfo = {
title: "NoteBook",
director: "Mr. Ramiz"
}




type DetailLogs = {
    message: string;
    level: "info"| "warn"| "error"
}



function messageType (msg: string| number | DetailLogs){
    if(typeof msg === "string"){
        console.log(`the message is ${msg}`)
    }
    else if (typeof msg === "number"){
        console.log()
    }
    else {
        console.log()
    }
}


}
