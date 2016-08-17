var express = require("express");
var app = express();

const PORT = process.argv[2] || process.env.APP_PORT || 3000; 

app.use(express.static(__dirname + "/public"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.listen(PORT, function(){
    console.log("Server is running now", PORT)
});