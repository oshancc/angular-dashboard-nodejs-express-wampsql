const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json())

//Import Routes
const employeeRoute = require('./routes/employee');

//Use Routes
app.use('/api/employee', employeeRoute)

app.get("/", (req, res) => {
    res.send("Message from server");
});

app.listen(3001, () => {
    console.log("running on port 3001");
});