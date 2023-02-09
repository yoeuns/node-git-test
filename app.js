//app.js
var express = require('express');
var app = express();
const path = require("path");
const webpack = require("webpack");
var webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack({
  // webpack options
});

if (process.env.NODE_ENV === "development") {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(webpackDevMiddleware(compiler, {}));
}
if (process.env.NODE_ENV === "production") {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs')
}

app.use(express.static(path.resolve(__dirname, "public")));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`start! express server on http://localhost:${PORT}`);
});

