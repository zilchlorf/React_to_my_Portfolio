import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { PortButton } from './Code.js'

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`

class Contact extends Component {

  render() {
    return (
      <div>
                <CenteredHeader><PortButton href="https://bit.ly/37ptCkP" >Peruse or download my Resume</PortButton></CenteredHeader>
        <CenteredHeader>Get in touch with me:</CenteredHeader>

        <FormDiv>
          <form action="https://formspree.io/maxedmonds05@gmail.com" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <EmailMe>Or, just email me directly at <a href="mailto:maxedmonds05@gmail.com" ><strong>maxedmonds05@gmail.com</strong></a>.</EmailMe>

        <hr/> 

      </div>
    );
  }
}

export default Contact;
