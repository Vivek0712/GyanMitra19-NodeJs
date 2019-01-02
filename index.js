const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/env');


mongoose.connect(config.database.name, { useNewUrlParser: true });
// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to Database ' + config.database.name);
});
// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});
const app = express();


//Routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const registration = require('./routes/registration');
const college = require('./routes/college');
const accommodation = require('./routes/accommodation');
const course = require('./routes/course');
const role = require('./routes/role');
const category = require('./routes/category');
const degree = require('./routes/degree');
const department = require('./routes/department');
const event = require('./routes/event');
const roleUser = require('./routes/role_user');
const team_member = require('./routes/team_member');
const team = require('./routes/team');
const participationStatus = require('./routes/participationstatus');
const year = require('./routes/year');
const cart = require('./routes/cart');
//End Routes

//Running Port
const port = 3000;

// CORS Middleware
app.use(cors({ origin: 'http://localhost:4200' }));

// Set Static Folder
app.use('/assests', express.static('assests'))

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//Routes Starts
app.use('/users', users);
app.use('/registration', registration);
app.use('/auth',auth);
app.use('/college',college);
app.use('/accommodation',accommodation);
app.use('/course',course);
app.use('/role',role);
app.use('/role_user',roleUser);
app.use('/event',event);
app.use('/department',department);
app.use('/degree',degree);
app.use('/category',category);
app.use('/team_member',team_member);
app.use('/team', team);
app.use('/year', year);
app.use('/cart',cart);
app.use('/participationStatus',participationStatus);
//Routes Ends




// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});