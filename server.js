const express = require('express');
const brandRoutes = require('./routes/brandRoutes');
const partRoutes = require('./routes/partsRoutes');
const bodyParser = require('body-parser')
const logger = require(`morgan`)
const db = require('./db')

const app = express();
app.use(express.json());

app.use(logger('dev'))
app.use(bodyParser.json())

// Use routes
app.use('/types', brandRoutes);
app.use('/recipes', partRoutes);



app.get(`/`, (req, res) => {
    res.send("You have set up your server.js")
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
