import * as React from 'react';

const titleStyle = {
  fontSize: '30px',
  background: '#ffff00',
  width: '200px',
  height: '100px',
  padding: '10px',
};

interface ISayHi {
  to: string;
}

interface ISayHiState {
  showMsg: boolean;
}

export class SayHi extends React.Component<ISayHi, ISayHiState> {
  constructor(props: ISayHi) {
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
    }, 5000);
  }

  render() {
    return (
      <div>
        <button onClick={this.say}>Say Hi!</button>
        { this.state.showMsg && (<div style={titleStyle}>Hi {this.props.to}</div>) }
      </div>
    )
  }
};
