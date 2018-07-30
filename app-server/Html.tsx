import * as React from 'react';

interface IHtmlProps {
  bodyHtml: string;
}

export class Html extends React.Component<IHtmlProps, any> {
  render() {
    return (
      <html lang='en'>
        <head itemScope>
          <meta charSet='utf-8' />
          <title>Test SSR</title>
          <meta name='viewport'
            content='width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta httpEquiv='content-type' content='text/html;charset=UTF-8' />
        </head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: `<div id='app'>${this.props.bodyHtml}</div>` }} />
          <script src='/assets/app.js' />
        </body>
      </html>
    );
  }
}
