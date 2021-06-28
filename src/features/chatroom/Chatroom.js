import React from 'react';

export class Presentational extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    submitMessage() {
      this.setState((state) => {
        const currentMessage = state.input;
        return {
          input: '',
          messages: state.messages.concat(currentMessage)
        };
      });
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input
            value={this.state.input}
            onChange={this.handleChange} /><br />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {this.state.messages.map((message, idx) => {
              return (
                <li key={idx}>{message}</li>
              )
            })
            }
          </ul>
        </div>
      );
    }
  };