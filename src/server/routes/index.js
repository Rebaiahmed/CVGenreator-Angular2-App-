var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var fs = require('fs'),
 xml2js = require('xml2js');
var str2json = require('string-to-json');

app.use(express.static('/'));
app.use(express.static('dist'));
app.use('/*', express.static(path.resolve('dist')));

/* Test route */
router.get('/', function (req, res) {
    res.send('Requests to server are OK');
});



router.post('/XML', function (req, res) {
    
    var nom = req.body.nom ;
    var prenom = req.body.prenom;
    var email = req.body.email ;
    var age = req.body.age ;

//******************************* */
    var obj = {nom:nom,prenom:prenom,email:email,age:age};
    
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    
    console.log(xml)

    res.send(xml)

});






router.post('/JSON', function (req, res) {
    
    var nom = req.body.nom ;
    var prenom = req.body.prenom;
    var email = req.body.email ;
    var age = req.body.age ;

//******************************* */
    var obj = {nom:nom,prenom:prenom,email:email,age:age};
    
    var output = str2json.convert(obj);
    
  

    res.json(output)

});

module.exports = router;