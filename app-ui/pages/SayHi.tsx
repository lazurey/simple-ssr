import * as React from 'react';

const titleStyle = {
  fontSize: '30px',
  background: '#ffff00',
  width: '100px',
  height: '100px',
};

export class SayHi extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMsg: false,
    };
  }

  say = () => {
    this.setState({
      showMsg: true,
    });
    setTimeout(() => {
      this.setState({
        showMsg: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <button onClick={this.say}>Say Hi!</button>
        { this.state.showMsg && (<div style={titleStyle}>Hi</div>) }
      </div>
    )
  }
};
