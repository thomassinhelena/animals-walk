const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const petsRouter = require('./Routes/Pets');
const peoplesRouter = require('./Routes/Peoples');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/Pets', petsRouter);
app.use('/Peoples', peoplesRouter);

app.listen(3000, () => {
    console.log('server running port 3000...');
})