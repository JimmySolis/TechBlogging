const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize =require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
// This is my format for kickoutime: 1sec  60secs 60minutes 2hours  
const kickOutTime = 1000 * 60 * 60 * 2;

const sess = {
    secret: process.env.SECRET_SESS,
    cookies: {
        maxAge: kickOutTime
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handelbars', hbs.engine);
app.set('view engine', 'handelbars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Live at ${PORT}🚨`));
});

