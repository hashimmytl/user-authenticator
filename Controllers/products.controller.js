import { dirname } from 'path';
import { fileURLToPath } from 'url';


const products = []


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const product = (req, res) => {
    res.sendFile(__dirname + '/products.html');
};

export const isLoggedIn = (req, res, next) => {
  if (req.session.user) next();
  else res.redirect('/user/login');
};

export const productpage = (req,res) => {

    

    const {productname,productprice} = req.body
    // console.log(req.body);

    const newproduct = {productname,productprice}
     products.push(newproduct);
     console.log(products);

    const product = products.find(u => u.productname === productname && u.productprice === productprice)
     console.log(product);
   
    
   
    
}
