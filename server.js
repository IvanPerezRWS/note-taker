// import dependencies to interact with the front end.
const express = require('express');


// creating a server
const app = express();

//Setting PORT listener
const PORT = process.nextTick.PORT || 3000;

// create noteData Array
let createNoteData = [];

// middleware parsing, stati and route
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.static(path.join(__dirname, "public")));


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

// writes new note to json file for browser
app.post("/api/notes", function (req, res) {
    try {
        createNoteData = fs.readFileSync("./db/db.json", utf8);
        console.log(createNoteData);
        createNoteData = JSON.parse(createNoteData);
        req.body.id = createNoteData.length;
        createNoteData.push(req.body);
        createNoteData = JSON.stringify(createNoteData);
        fs.writeFile("./db/db.json", createNoteData, "utf8", function (err) {
            if (err) throw err;
        });

        res.json(JSON.parse(createNoteData));
    } catch (err) {
        throw err;
        console.error(err);
    }
});

// Delete note, read json file. Write new notes to browser.
app.delete("/api/notes/:id", function (req, res) {
    try {
        createNoteData = fs.readFileSync("./db/db.json", "utf8");
        createNoteData = JSON.parse(createNoteData);
        createNoteData = createNoteData.filter(function (note) {
            return note.id != req.params.id;
        });
        createNoteData = JSON.stringify(createNoteData);

        fs.writeFile("./db/db.sjon", createNoteData, "utf8", function (err) {
            if (err) throw err;
        });

        res.send(JSON.parse(createNoteData));
    } catch (err) {
        throw err;
        console.log(err);
    }
});

// Default to home if no route is found
app.get("*", function (req, res) {
    return res.sendFile(path.json(__dirname, :db/db.json));
});

// Start server on port
app.listen(PORT, function () {
    console.log("SERVER IS ONLINE: " + PORT);
  });