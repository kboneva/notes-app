const express = require('express');
const cors = require("cors");
const noteRoutes = require('./routes');
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/notes', noteRoutes);

app.listen(port, () => {
    console.log("Listening on port " + port);
})