import express from 'express'
import dotenv, { config } from 'dotenv'
import session from 'express-session'
import cookieParser from 'cookie-parser'

import router from './Routes/user.routes.js';
import productrouter from './Routes/products.routes.js';


const app = express()
dotenv.config()

const port = process.env.port || 3001




app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

app.use(session({
    name: 'hashim',
    secret: process.env.secretkey, // used to sign the session ID cookie
    resave: false,         // don’t save session if unmodified
    saveUninitialized: true, // save new sessions
  }));

app.use('/user',router);

app.use('/products',productrouter);




// const isLoggedIn = (req, res, next) => {
//   if (req.session.user) next();
//   else res.redirect('/login');
// };







//  app.get('/products',isLoggedIn, (req, res) => {
//     res.sendFile(__dirname + '/products.html');
// });




app.listen(port, (req,res) => {
    console.log(`server is running ${port}`);
    
})