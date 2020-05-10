var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('Request received to add a product');
  res.render('product_add', { title: 'Add product' });
});

/*Export router means to export the routes to this page*/
module.exports = router;