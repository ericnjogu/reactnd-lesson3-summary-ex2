import React from 'react'

function ChatWindow(props) {
  return (
    <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.user.username}</div>

            <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={(event) => props.handleSubmit(event, props.user.username)}>
                <input type="text" className="form-control" placeholder="Enter your message..." 
					onChange={(event) => props.updateInputMsg(event, props.user.username)} value={props.inputMessage}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={props.submitIsDisabled(props.user.username)}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
  );
}

export default ChatWindow