const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var myArgs = process.argv[2];
// console.log(myArgs)

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
    console.log(result.rows); //output: 1
    client.end();
  });
});

//now change query, must be either first name or last name
//add an or condition that it's also last name
