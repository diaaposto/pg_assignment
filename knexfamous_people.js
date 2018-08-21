const pg = require("pg");
const settings = require("./settings"); // settings.json
const config = require("./knexfile.js");
const env = 'development';
const knex = require('knex')(config[env])

var myArgs = process.argv[2];
// console.log(myArgs)

const printNames = (result) => {
    console.log(result); //result is an array of one obj for now
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  //can't put myArgs in there it's not safe so put $1
  //myArgs represents "Paul" (hardcoded)
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [myArgs], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    printNames(result.rows); //output: 1
    client.end();
  });
});

//now change query, must be either first name or last name
//add an or condition that it's also last name
