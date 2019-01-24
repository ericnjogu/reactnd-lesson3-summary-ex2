import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

class App extends Component {
  
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    inputMessage: {'Amy':'','John':''},
    messages : []
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = (username) => {
    console.log(`input message in disabled check: '${this.state.inputMessage[username]}'`)
    return this.state.inputMessage[username].trim().length === 0;
    //return false
  };

updateInputMsg = (event, username) => {
  const newInput = event.target.value;
  this.setState({
    inputMessage: {[username]:newInput}
  });
};

	handleSubmit = (event, username) => {
      event.preventDefault();
      this.setState({
        'messages':[...this.state.messages, {'username': username, 'text': this.state.inputMessage[username]}],
        inputMessage: {[username]:''}
      });
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 2 - All Together</h1>
        </header>
        <div className="container">
          <ChatWindow 
    			messages={this.state.messages} 
				user={this.state.users[0]} 
				submitIsDisabled={this.isDisabled}
				updateInputMsg = {this.updateInputMsg}
				handleSubmit = {this.handleSubmit}
				inputMessage = {this.state.inputMessage[this.state.users[0].username]}
          />
 			<ChatWindow 
    			messages={this.state.messages} 
				user={this.state.users[1]} 
				submitIsDisabled={this.isDisabled}
				updateInputMsg = {this.updateInputMsg}
				handleSubmit = {this.handleSubmit}
				inputMessage = {this.state.inputMessage[this.state.users[1].username]}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
