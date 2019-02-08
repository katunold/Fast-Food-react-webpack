const express = require('express');
const yields = require('express-yields');
const fs = require('fs-extra');
const webpack = require('webpack');

const config = require('../webpack.config.js');

const compiler = webpack(config);
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('src'));
app.use(require('webpack-dev-middleware')(compiler, {noInfo: true}));
app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function * (req, res) {
    let index = yield fs.readFile('./public/index.html', 'utf-8');
    res.send(index);
});

app.listen(port, '0.0.0.0', () => console.log(`http://localhost:${port}`));
