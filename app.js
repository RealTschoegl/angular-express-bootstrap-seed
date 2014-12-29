var express = require('express'),
	app = express(),
	router = express.Router(),
	api = require('./routes/api-routes');

app.use(router);

// ***** Static web pages are served up here
router.use('/public', express.static(__dirname + '/public'));
router.use('/bower_components', express.static(__dirname + '/bower_components'));
router.use('/node_modules', express.static(__dirname + '/node_modules'));
router.use('/static', express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

router.use('/api', api);

// ***** Default routing
router.get('/', function(req, res){
  res.render('layout');
});

// ***** Routing for serving partials
router.get('/partial/:name', function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
});

// ***** For all other routes
router.get('*', function(req, res){
  res.render('layout');
});

// ***** Port Assignment
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');

