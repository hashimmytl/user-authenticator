import { Router } from "express";
import { product ,productpage,isLoggedIn } from "../Controllers/products.controller.js";

const productrouter = Router()

productrouter.get('/productspage',isLoggedIn,product)

productrouter.post('/productpage',isLoggedIn,productpage)

productrouter.get('/isLoggedIn',isLoggedIn)

export default productrouter