require('./models/user');
require('./models/track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes.js');
const trackRoutes = require('./routes/track-routes');
const requireAuth = require('./middlewares/require-auth');

const app = express();


app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const connectionString = 'mongodb+srv://admin:admin@react-native-course.uvjui.mongodb.net/tracker-app?retryWrites=true&w=majority';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', () => {
    console.error('error connecting to mongo');
});

app.get('/', requireAuth, ((req, res) => {
    res.send(`Hi, ${req.user.email}`)
}));

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})