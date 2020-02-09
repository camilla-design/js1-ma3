// Question 1
//Convert the function below to an arrow function:

//function(a, b) {
//    return a - b;
//}

//const sum = (a, b) => a - b;

// Question 2

//Make a call to the URL below, 
//pass the JSON it returns to a function and inside that function loop through the results and log each game's name.

// In the catch method of your code, redirect to error.html if there is an error.
/*

fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        sportsGame(json);
    })
    .catch(function(error) {
        error(error.html);
    })

    function sportsGame(json) {
        const games = json.results;

        for (let i =0; i < games.length; i++) {
            console.log(games[i].name);
        }
    }
    

// Question 3
// Replace the word cats with the word giraffes in the following sentence:

// These cats are outrageous.

const animalReplace1 = "These cats are outrageous";
const animalReplace2 = animalReplace1.replace("cat", "giraffes");


// Question 4
//Given the URL below, write code that checks if there is a userId parameter in the query string.

//If there is no userID parameter, redirect the browser to third.html.

//If there is a userID parameter and its value is less than 10, redirect to first.html.

//If there is a userID parameter and its value is 10 or greater, redirect to second.html.
/*


const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id")
} else {
    document.location.href = "/";
}

const detailsUrl = `${baseUrl}${id}`;

const baseUrl = "https://my.site.com?userId=7";
const thirdHTMLUrl = "http://127.0.0.1:5500/third.html";
const firstHTMLUrl = "http://127.0.0.1:5500/first.html";
const secondHTMLUrl = "http://127.0.0.1:5500/second.html";

/*
// Question 5
// Write code that removes the button, and only the button, from its parent element in the HTML below:

const container = document.querySelector(".container");
const buttonRemove = document.querySelector(".btn");
container.removeChild(buttonRemove);



// Question 6
//Create an li element with a text value of Parrots and a class of parrots.

//Add the new item as the second item in the ul below (add it after Cows).

const container = document.querySelector(".cows")
const listItem = document.createElement("li");


listItem.className = "parrots";

const liContent = document.createTextNode("Parrots");
listItem.appendChild(liContent);
console.log(listItem);
container.appendChild(listItem);


// Question 7

//Make a call to the URL below and pass the JSON it returns to a function.

//Inside that function select the div from the HTML below and assign the rating property from the JSON object as it's text value.

//In the catch method, log the error that may be returned.

const baseUrl = "https://api.rawg.io/api/games/3801";
const gamesUrl = `${baseUrl}games/`;
const detailsUrl = `${gamesUrl}${id}`;

fetch(detailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function(error) {
        error(error);
    })

    function createDetails(json) {
        
        const games = json.results;

        for (let i =0; i < games.length; i++) {
            console.log(games[i].rating);
        }
    }
    
    */