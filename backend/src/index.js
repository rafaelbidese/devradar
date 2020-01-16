const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://rafael:<password>@cluster0-z0d10.mongodb.net/database?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

