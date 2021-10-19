const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req,res)=>{
    res.render("cookie", {
        cookies: req.cookies
    });
});

app.post('/', (req, res)=>{
    key = req.body.key;
    value = req.body.value;
    res.cookie(key,value);
    res.redirect(303, '/');
});

app.listen(3000);