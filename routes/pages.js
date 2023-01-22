var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {
	res.render('index');
});

router.get('/about', async function(req, res, next) {
	res.render('pages/about');
});

router.get('/contact', async function(req, res, next) {
	res.render('pages/contact');
});

router.get('/education', async function(req, res, next) {
	res.render('pages/education');
});

router.get('/experience', async function(req, res, next) {
	res.render('pages/experience');
});

router.get('/skills', async function(req, res, next) {
	res.render('pages/skills');
});

router.get('/work', async function(req, res, next) {
	res.render('pages/work');
});

module.exports = router;