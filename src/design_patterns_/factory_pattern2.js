// Express application with 10 endpoints
// where every endpoint can return three errors based on the user input

import express from "express";
var app = express();

app.use('/route1', async (req, res) => {
    if(!req.body) res.json ({error:true, msg: 'no body'});
    else if(!req.params) res.json ({error:true, msg: 'no params'});
    else if(!req.cookies) res.json({error:true, msg: 'no cookies'});
});

app.use('/route2', async (req, res) => {
    if(!req.body) res.json ({error:true, msg: 'no body'});
    else if(!req.params) res.json ({error:true, msg: 'no params'});
    else if(!req.cookies) res.json({error:true, msg: 'no cookies'});
});

// ... so on ===> for 10 routes ====> total 30 error messages
// Suppose, you want to add a new attribute to the error object


app.use('/route1', async (req, res) => {
    if(!req.body) res.json ({error:true, msg: 'no body', newAttr: 'something11' });
    else if(!req.params) res.json ({error:true, msg: 'no params', newAttr: 'something12'});
    else if(!req.cookies) res.json({error:true, msg: 'no cookies', newAttr: 'something13'});
});
// Like this ====> you have to change everywhere... add newAttr property @ 30 places
