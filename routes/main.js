const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    res.render('home', req.context)

})

router.get('/menu', (req, res, next) => {

    res.render('menu', req.context)
})

router.get('/blog', (req, res, next) => {

    res.render('blog', req.context)
})

router.get('/location', (req, res, next) => {

    res.render('location', req.context)
})

router.get('/team', (req, res, next) => {

    res.render('team', req.context)
})

module.exports = router