// import dependencies to interact with the front end.
const express = require('express');


// creating a server
const app = express();

//Setting PORT listener
const PORT = process.nextTick.PORT || 3000;


// api call response
app.get("/api/notes", function (err, res) {
    try {
      createNoteData = fs.readFileSync("db/db.json", "utf8");
      console.log("Hello from the SERVER!");
      createNoteData = JSON.parse(createNoteData);
    } catch (err) {
      console.log("\n error (catch err app.get):");
      console.log(err);
    }
    res.json(createNoteData);
  });

// Start server on port
app.listen(PORT, function () {
    console.log("SERVER IS ONLINE: " + PORT);
  });