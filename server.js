// import dependencies to interact with the front end.
const express = require('express');


// creating a server
const app = express();

// Start server on port
app.listen(3001, () => {
    console.log("Server is online:" + PORT);
})