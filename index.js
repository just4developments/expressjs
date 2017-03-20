require('./src/appconfig');
const express = require('express');
const compression = require('compression');
const app = express();
global.app = app;

app.disable('etag');
app.disable('x-powered-by');

app.use(compression());
app.use('/', express.static('dist'));

app.listen(appconfig.listen, () => {
  console.log('Theme is listening on %d', appconfig.listen);
});