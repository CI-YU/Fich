const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const hbs = require('hbs');

const app = express();

//express path
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
//setup static directory to serve
console.log(publicDirectoryPath);
app.use(express.static(publicDirectoryPath));

app.use(compression());
app.use(helmet());
app.use(express.json());

app.get('', (req, res) => {
  res.render('index');
});

app.get('/disclaimer', (req, res) => {
  res.render('disclaimer');
});

app.get('/signin', (req, res) => {
  res.render('signin');
});
app.get('/etfpro', (req, res) => {
  res.render('etfpro');
});
app.get('/etfqa', (req, res) => {
  res.render('etfqa');
});
app.get('/kev', (req, res) => {
  res.render('kev');
});
app.get('/service', (req, res) => {
  res.render('service');
});
app.get('*', (req, res) => {
  res.render('index');
});

module.exports = app;
