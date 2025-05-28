import { Router } from "express";
import { showhtml, signup ,loginhtml,login, dashboard ,logoutpage } from "../Controllers/user.controller.js";


const router = Router()

router.get('/signup',showhtml)

router.get('/login',loginhtml)

router.post('/signup',signup)

router.post('/login',login)

router.get('/dashboard',dashboard )

router.get('/logoutpage',logoutpage)

export default router

