const express = require('express');
const path = require('path');
const cors = require('cors');

/* eslint-disable no-console */

console.log('Starting express server...');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors({ origin: 'https://trello.com' }));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);

const fs = require('fs');

console.log(`Express server started on port ${port}`);
console.log(process.cwd());
console.log(__dirname);
console.log(fs.readdirSync(path.resolve(__dirname, 'dist')));
