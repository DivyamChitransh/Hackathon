const express = require('express');
const mongoose = require('mongoose');
const userroutes = require('./routes/userroutes.js');
const yogroutes = require('./routes/asanaroutes.js');

const app = express();
app.use(express.json());
const PORT = 4000;

mongoose.connect('mongodb://localhost:27017/YogDB').then(() => console.log('Database Connected')).catch(err => console.log('Unable to connect DB',err));

app.use('/users',userroutes);
app.use('/yogasanas',yogroutes)

app.listen(PORT,() => {
    console.log(`Server Running at ${PORT}`)
});
