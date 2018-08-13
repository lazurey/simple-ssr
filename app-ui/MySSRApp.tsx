import * as React from 'react';
import { fetchHackerNews } from './pages/fetch-data';

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
    fetchHackerNews('16671781')
      .then(({ url, title }) => {
        this.setState({
          store: {
            url,
            title,
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
      <h1>Hello SSR</h1>
      <p>SSR Hacker News</p>
      <p><a href={store.url}>{store.title}</a></p>
      <p><button onClick={this.fetchData}>Fetch from client side</button></p>
      <p><pre>Note: {store.meta}</pre></p>
    </main>);
  }
};
