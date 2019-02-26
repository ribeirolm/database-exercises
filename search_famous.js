const settings = require("./settings"); // settings.json
const knex = require("knex")({
  client: "pg",
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
}

});



// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }

//   client.query("SELECT first_name, last_name, birthdate::text FROM famous_people WHERE first_name = $1::text", [process.argv[2]], (err, result) => {
//     console.log("Searching...");
//     if (err) {
//       return console.error("error running query", err);
//     } else {
//       console.log("Found " + result.rows.length + " person(s) by the name " + "'" +[process.argv[2]] + "'" + ":")
//         result.rows.forEach(function(element){
//           console.log(element.first_name + " " + element.last_name + ", born " + element.birthdate)
//         }) ;
//     client.end();
//     }
//   })
// });


knex('famous_people')
.where({first_name: process.argv[2]})
.then (rows => {rows.forEach(function(element){
          console.log(element.first_name + " " + element.last_name + ", born " + element.birthdate)
        })

})

