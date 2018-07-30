import * as React from 'react';

import { SayHi } from './pages/SayHi';

export class MySSRApp extends React.Component<any, any> {
  render() {
    return (<main>
      <h1>Hello SSR</h1>
      <SayHi />
    </main>);
  }
};
