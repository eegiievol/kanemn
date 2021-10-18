const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


app.get("/", (req, res) => {
    res.render("form")
});

app.post("/result", (req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    if(!name){name="person";}
    if(!age){age=0;}
    res.render("return", {
        n: name,
        a: age
    });

});

app.listen(3000);


