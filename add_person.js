const config = require('./knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

 
knex('famous_people').insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}).then(function(){
    console.log("answer completed")
});