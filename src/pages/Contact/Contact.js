import React from "react";
import "./contact.css"
import "react-bootstrap";

import axios from 'axios';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {

    this.setState({ name: "", email: "", message: "" })
  }

  render() {
    return (
      <div className="App">


        <h1> Contact links and resume:</h1>

        <div  className="container">
    <div >
      <div id="emailStatement" >
        <a href="https://drive.google.com/file/d/1i9B6n5eTbl0n-J4gQHnENf0xNanasOzd/view?usp=sharing">Current
          resume</a>
      
          <br></br><br></br>
        <a href="https://github.com/zilchlorf">GitHub Profile</a>
        <br></br>

        <br></br>
        <a href="https://www.linkedin.com/in/max-edmonds-abab5b1a/">LinkedIn</a>
      </div>
    </div>
 
    <br></br>
  <br></br>
  <a id="emailStatement"href="mailto:maxedmonds05@gmail.com">Send me an Email at maxedmonds05@gmail.com:</a>  </div>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} action="mailto:maxedmonds05@gmail.com" method="POST" encType="text/plain">
              <div className="form-group">
                <label id="formText" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label id="formText" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label id="formText" htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
  	</div>
	);
  }

  onNameChange(event) {
              this.setState({ name: event.target.value })
            }

  onEmailChange(event) {
              this.setState({ email: event.target.value })
            }

  onMessageChange(event) {
              this.setState({ message: event.target.value })
            }
}
export default Contact;
