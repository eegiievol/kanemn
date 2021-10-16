const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.send(`<form method="POST" action="/result">
                <label for="name">Name</label>
                <input type='text', id='name', name='name'>
                <label for="age">Age</label>
                <input type='number' id='age', name='age'>
                <input type='submit', value='Submit'>
                </form>`);
});

app.post("/result", (req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    if(!name){name="person";}
    if(!age){age=0;}
    res.send(`Welcome ${name}, age ${age}`);

});

app.listen(3000);


