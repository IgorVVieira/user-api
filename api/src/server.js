const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
require('./database/connection');

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});