const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors);

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/apps', (req, res) => res.send('apps!'));

// node --env-file=.env .
app.listen(process.env.EXPRESS_PORT, () => console.log(`Example app listening on port ${process.env.EXPRESS_PORT}!`));
