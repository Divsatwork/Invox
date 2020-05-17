var express = require('express');
var router = express.Router();
var utils = require('../services/utilityService');

/* GET product */
router.get('/', function(req, res, next) {
  res.render('product_main', { title: 'Products' });
});

//Return the add product page
router.get('/add', function(req, res, next) {
    res.render('product_add', {title: 'Add Product', error: ''});
})

//API to add a product
router.post('/', function(req, res, next) {
    console.log('Received request');
    //Make call to the service layer after verifying all the information.
    //If product add is success use the next to redirect to view product else return to add product
    if(!utils.verifyProductDetails(req.body)) {
      
    }
})

router.put('/', function(req, res, next) {
  console.log('Updating values for Product');
  //Make call to the service layer after verifying the info
})

/*Export router means to export the routes to this page*/
module.exports = router;