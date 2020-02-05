// Question 1

//const sum = (a, b) => a - b;

// Question 2

//Make a call to the URL below, 
//pass the JSON it returns to a function and inside that function loop through the results and log each game's name.

// In the catch method of your code, redirect to error.html if there is an error.


fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        sportsGame(json);
    })
    .catch(function(error) {
        error.html(error);
    })

    function sportsGame(json) {
        const games = json.results;

        for (let i =0; i < games.length; i++) {
            console.log(games[i].name);
        }
    }


        

