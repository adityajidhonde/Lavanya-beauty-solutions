const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/probase", {
useNewUrlParser: true,
useUnifiedTopology: true
});


const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));



app.listen(3000, function(){
	console.log("App is running on Port 3000");
});
