var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.end("Welcome back to express!!!");
});

app.listen(9000, (err, success) => {
    if(err){
        console.log("Error connecting to a server:(");
    } else {
        console.log("Server is listening at port 9000");
    }
})