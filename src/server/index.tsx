import React from 'react';
import ReactDOMServer from 'react-dom/server'
import express from 'express';
import fs from 'fs'
import path from 'path'

import { App } from '../client/App'

const app = express();

app.use('/bundle.js', express.static(path.resolve(__dirname, '../../dist/client/bundle.js')));

app.use("/", (req: any, res: any) => {
  const appHTML = ReactDOMServer.renderToString(<App />);

  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../../dist/client/index.html'), 'utf8')
  indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);
  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

app.listen("9000", () => {
  console.log("Express server started at http://localhost:9000");
});
