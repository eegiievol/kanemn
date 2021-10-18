const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const h = date.getHours();
    const isDaytime = h > 6 && h < 18;
    res.render("index", {
        time: date.toTimeString(),
        style: isDaytime ? "/css/day.css" : "/css/night.css"
    });
});
app.listen(3000);