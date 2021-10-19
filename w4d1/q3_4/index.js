const express = require('express');
const path = require('path');
const app = express();

const session = require('express-session');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "5h54h44534594yiuiu45y4",
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/image', express.static(path.join(__dirname, 'image')));

let products = [
    {
        id: 1,
        name: "prod1",
        price: 10,
        image: "/image/1.jpg"
    },
    {
        id: 2,
        name: "prod2",
        price: 20,
        image: "/image/2.jpg"
    },
    {
        id: 3,
        name: "prod3",
        price: 50,
        image: "/image/3.jpg"
    },
    {
        id: 4,
        name: "prod4",
        price: 44,
        image: "/image/4.jpg"
    },
    {
        id: 5,
        name: "prod5",
        price: 33,
        image: "/image/5.jpg"
    },
    {
        id: 6,
        name: "prod6",
        price: 51,
        image: "/image/6.jpg"
    }
];



app.get('/', (req, res) => {
    res.render("shop", {
        products: products,
    });
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(p => p.id == id);
    res.render("product", {
        product: product,
    });
});

app.post('/cart', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    let cart = req.session['cart'];
    if(!cart){cart={}};

    if (!cart[name]) {
        cart[name] = { name: name, price: parseInt(price), quantity: 1 }
    } else {
        const quantity = cart[name].quantity
        cart[name].quantity += 1;
        cart[name].price += parseInt(price);
    }

    req.session['cart'] = cart;

    res.redirect(303, `/cart`);
});

app.get('/cart', (req, res) => {
    res.render("cart", {
        cart: req.session['cart'],
    });
});

app.listen(3000);