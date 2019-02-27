class DisplayMessages extends React.Component {
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
    const currentMessage = this.state.input;
    this.setState({
      input: "",
      messages: this.state.messages.concat(currentMessage)
    });
}

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
          <input 
          value={this.state.input}
          onChange = {this.handleChange}
          />
          <br/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>{this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }</ul>
      </div>
    );
  }
};


// Extract state logic to Redux

const ADD = "ADD";

function addMessage(message){
  return { 
   type: ADD,
   message: message,
  };
};

function messageReducer(previousState, action) {
  return [...previousState, action.message]
};


let store = {
  state: [],
  getState: () => store.state, 
  dispatch: (action) => {
    if(action.type === ADD){
      store.state = messageReducer(store.state, action);
    }
  }
};
