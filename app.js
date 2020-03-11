const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const schema = require('./graphql/schema.js');
const root = require('./graphql/root.js');

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connection is successful')).catch(err => console.error(err));

const app = express();


app.use(
  session({
    secret: 'heyheyhey',
    resave: false,
    maxAge: 3600 * 60,
  })
);
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(__dirname + '/public'));

require('./passport-config.js');

app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('its fucking work'));
