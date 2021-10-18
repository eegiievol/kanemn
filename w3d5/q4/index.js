const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get("/", (req, res) => {
    const dt = new Date();
    const hr = dt.getHours();
    const isDay = hr > 6 && hr < 18;
    res.send(`
                <html lang="en">               
                <head>
                <meta charset="UTF-8">
                <title>Form</title>
                <link rel="stylesheet" type="text/css" href=${isDay ? "/css/day.css" : "/css/night.css"}>                
                </head>                
                <body>
                <form method="POST" action="/result">
                <label for="name">Name</label>
                <input type='text', id='name', name='name'>
                <label for="age">Age</label>
                <input type='number' id='age', name='age'>
                <input type='submit', value='Submit'>
                </form>
                </body>    
                </html>`);
});

app.post("/result", (req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(303, `/output?name=${name}&age=${age}`);
});

app.get("/output", (req,res)=>{
    let name = req.query.name;
    let age = req.query.age;

    if(!name){name="unknown";}
    if(!age){age=-1;}

    res.send(`Welcome ${name}, age ${age}`);

});

app.listen(3000);


