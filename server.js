const express = require("express");
const app = express();

app.use(express.static(__dirname + "/src/public"));

app.listen(5000, () => {
    console.log("Started Dev server.");
    console.log("  > Localhost:5000");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/public/index.html")
})