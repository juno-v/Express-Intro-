// make sure this server.js is in the server directory, not public

// everytime you use express, copy and paste lines 7-15
// link express 
// without the ./, it will search in node_modules 
// use ./ if file is not your own
const express = require('express');


// get an instance of express
const app = express(); 


// use the public directory we made for the static files 
app.use( express.static('server/public') );


// array of stuff to send back for app.get('/cats')
let catsArray = ['Tuna', 'Mackerel'];

// array of stuff to send back for app.get('/dogs)
let dogsArray = ['Treo', 'Eli', 'Penny', 'Oscar'];

// we can get things that are NOT in a file 
app.get('/cats', function(req, res) {
console.log(`in get cats`);
// good servers always respond! 
res.send(catsArray);
}) // end get catsArray 

app.get('/dogs', (req, res) => {
    console.log(`in get dongs`);
    res.send(dogsArray);
}); // end get dogs


// server has to listen to a specific port to complete requests 
const port = 5000;
app.listen(port, function () {
    console.log(`Listening on port $(port)...`);
}); // end port const 