const express = require('express'),
    pug = require('pug'),
    path = require('path'),
    routes = require('./routes/routes'),
    expressSession = require('express-session'),
    bcrypt = require('bcryptjs'),
    cookieParser = require('cookie-parser');

    const app = express();

    app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname, '/public')));

const urlEncodedParser = express.urlencoded({
    extended: false
});

app.use(expressSession({
    secret: 'whatever',
    saveUnitialized: true,
    resave: true
}))

const checkOff = (req, res, next) =>{
    if(req.session.user && req.session.user.isAuthenticated){
        next();
    } else{
        res.redirect('/login');
    }
}

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cookieParser('whatever'));

app.get("/api", routes.api);
app.get("/", routes.home);
app.get("/signup", routes.signUp);
app.post("/signup", urlEncodedParser, routes.addUser);
app.get("/login", routes.logIn);
app.post("/login", urlEncodedParser, routes.logInAction);
app.get("/testAll", routes.getAllData);
app.get("/dashboard", checkOff, routes.dashboard);
app.get("/dashboardAdmin", checkOff, routes.dashboardAdmin);
app.post("/dashboard/:id", urlEncodedParser, routes.changeAnswer);
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

app.listen(3000);