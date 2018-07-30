import * as React from 'react';

import { SayHi } from './pages/SayHi';

const containerStyle = {
  width: '600px',
  margin: '40px auto 0',
}

export class MySSRApp extends React.Component<any, any> {
  render() {
    return (<main style={containerStyle}>
      <h1>Hello SSR</h1>
      <SayHi />
    </main>);
  }
};
