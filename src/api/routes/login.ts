import express from "express";
const router = express.Router();

export default router.get('/', (req, res, next) => {
    res.render('login', {title: 'Login', message: null});
})