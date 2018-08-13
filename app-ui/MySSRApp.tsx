import * as React from 'react';
import { fetchUsername } from './pages/fetch-data';

import { SayHi } from './pages/SayHi';

const containerStyle = {
  width: '600px',
  margin: '40px auto 0',
};

export class MySSRApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = props.store ? {
      ...props.store
    } : undefined;
  }

  fetchData = () => {
    fetchUsername('lazurey')
      .then(({ username }) => {
        this.setState({
          store: {
            username,
            meta: 'fetch from client side',
          },
        });
      });
  }

  componentDidMount() {
    if (!this.state.store) {
      this.fetchData();
    }
  }

  render() {
    const { store } = this.state;
    return (<main style={containerStyle}>
      <h1>Hello SSR from {store.username}</h1>
      <SayHi to={store.username} />
      <button onClick={this.fetchData}>Fetch a new one</button>
      <pre>Note: {store.meta}</pre>
    </main>);
  }
};
