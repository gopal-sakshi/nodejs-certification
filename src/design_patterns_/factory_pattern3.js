import express from "express";
var app = express();

app.use('/route1', async (req, res) => {
    if(!req.body) res.json (ErrorFactory.getError(err));
    else if(!req.params) res.json (ErrorFactory.getError(err));
    else if(!req.cookies) res.json (ErrorFactory.getError(err));        // centralize the logic for creating the error object
});

