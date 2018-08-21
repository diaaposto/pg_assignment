const pg = require("pg");
const settings = require("./settings"); // settings.json
const config = require("./knexfile.js");
const env = 'development';
const knex = require('knex')(config[env]);

var myArgs = process.argv[2];
// console.log(myArgs)

const printNames = (result) => {
    console.log(result); //result is an array of one obj for now
}

// select statement with a where
knex .from('famous_people')
    .where('first_name', process.argv[2])
    .select()
    .asCallback(function(err, rows) {
        if (err) {
        return console.error("error running query", err);
        } else {
        printNames(rows);
        }
    })
//now change query, must be either first name or last name
//add an or condition that it's also last name
