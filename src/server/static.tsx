import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { App } from '../client/App'

/**
 * The idea of the static file is to generate the HTML
 * for a parent process to consume and return back to 
 * the browser.  For example, if I have a Java application
 * and want to use React to generate the HTML to return
 * to the client, we can use this script to generate
 * the HTML output
 */

const appHTML = ReactDOMServer.renderToString(<App />);
const indexHTML = `<div id="root">${appHTML}</div>`
console.log(indexHTML)

