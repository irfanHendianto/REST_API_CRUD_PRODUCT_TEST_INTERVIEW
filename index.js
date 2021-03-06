const express = require('express');
const config = require('./config');
const connectionDB = require('./db.js')
const routes = require('./routes/routes');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/",(req,res) => res.send("Hello , Welcome "));
app.use(`/api`, routes.routes);
app.use('/uploads', express.static(path.join(__dirname + '/uploads/')));

const ports = config.port || 8080
app.listen(config.port, () => console.log("App Listening on url http://localhost:" + ports));
connectionDB()





