const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

require('./passport-config.js');

require('dotenv').config();

const schema = require('./graphql/schema.js');
const root = require('./graphql/root.js');

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connection is successful')).catch(err => console.error(err));

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(__dirname + '/public'));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('its fucking work'));
