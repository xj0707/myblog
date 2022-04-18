var express = require('express');
var router = express.Router();
const mongo = require('../dao/mongodb')

/* GET home page. */
router.get('/', async function (req, res, next) {
  let users = await mongo.findAll('test', "user") || []
  res.render('index', { title: 'my blog' + '  ' + global.port, users });
});
router.get('/adduser', async function (req, res, next) {
  let name = 'leo' + Math.floor(Math.random() * 10)
  await mongo.Insert('test', "user", { username: name })
  let users = await mongo.findAll('test', "user") || []
  res.render('index', { title: 'my blog' + '  ' + global.port, users });
});
router.get('/deluser/:id', async function (req, res, next) {
  let name = 'leo' + req.params.id
  await mongo.Delete('test', "user", { username: name })
  let users = await mongo.findAll('test', "user") || []
  res.render('index', { title: 'my blog' + '  ' + global.port, users });
});

module.exports = router;
