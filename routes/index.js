var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var FeedItem = mongoose.model('FeedItem');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/feeditems', function(req, res, next) {
  FeedItem.find(function(err, item){
    if(err){ return next(err); }
    res.json(item);
  });
});

router.post('/feeditem', function(req, res, next) {
  var feed = new FeedItem(req.body);

  feed.save(function(err, feed){
    if(err) { return next(err); }

    res.json(feed);
  });
});

router.param('feeditem', function(req, res, next, id) {
  var query = FeedItem.findById(id);

  query.exec(function(e, f) {
    if (e) { return next(e); }
    if (!f) { return next(new Error('Can\'t find feeditem')); }

    req.feeditem = f;
    return next();
  });
});

router.get('/feeditem/:feeditem', function(req, res) {
  res.json(req.feeditem);
});

module.exports = router;
