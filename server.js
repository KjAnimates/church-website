const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static(__dirname + "/src/public"));

app.listen(PORT, () => {
    console.log("Started Dev server.");
    console.log("  > Localhost:%s", PORT);
})

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/src/public/index.html")
})

// Redirect to the home page;
app.get('/', (req, res) => {
    res.redirect("home")
})