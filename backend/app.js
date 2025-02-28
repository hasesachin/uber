const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/conn');
const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');
connectToDb();


app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;