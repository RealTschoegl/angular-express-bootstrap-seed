var express = require('express'),
	router = express.Router(),
	sample = require('../api/sample');

router.get('/sample', sample.sample);

module.exports = router;