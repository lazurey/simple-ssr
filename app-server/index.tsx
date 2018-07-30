import * as express from 'express';
import * as path from 'path';
import * as React from 'react';
import {
  renderToStaticMarkup,
  renderToString,
} from 'react-dom/server';
import { Html } from './Html';
import { MySSRApp } from '../app-ui/MySSRApp';

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, '../public')));

app.use((_: any, res: express.Response) => {
  const ssrApp = renderToString(<MySSRApp />);
  const appWithHtmlWrapper = renderToStaticMarkup(<Html bodyHtml={ ssrApp } />);
  res.send(appWithHtmlWrapper).status(200);
});

app.listen(4321, () => {
  console.log('\x1b[32m%s\x1b[0m', `Server is listening on port 4321...`);
});