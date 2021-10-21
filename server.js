const express = require("express");
const htmlRouter = require('./routes/htmlRoute.js');
const routes = require('./routes/mainRouter.js');



const app = express();
const PORT = process.env.PORT || 3001;//connection for heroku


// Middleware for urlencoded form data and parsing JSON and displaying all thats in public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/', htmlRouter);
app.use('/api', routes);



//link to the app using localhost/port number
app.listen(PORT, () =>
    console.log("Application is listening on PORT: " + PORT));