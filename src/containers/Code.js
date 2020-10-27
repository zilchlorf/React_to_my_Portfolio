import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>AJAX</li>
                <li>jQuery</li>
                <li>Jest</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
        <CenteredHeader>Recent work:</CenteredHeader>
        <PortRow>
            <a href="https://reds-gold-greens.herokuapp.com" >
              <CodeThumbnail src={require("../assets/RGG_Tours.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Group Project #3: Reds, Gold & Greens</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://reds-gold-greens.herokuapp.com" alt="RGG Tours" >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/zilchlorf/RGG_Tours"
                    
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              For our final team project, we decided to build a fully functioning web site for a completely new business that we created. This project is intended to showcase our newly acquired skills as Full Stack Web Developers as well as highlight our entrepreneurial spirits. Our business model is simple. Book online. Pay upfront. Call us because you want to, not because you need to.
              </PortDescription>

              {/* <UsedList>
                <UsedItem>React</UsedItem>
                <UsedItem>MongoDb</UsedItem>
                <UsedItem>Express</UsedItem>
                <UsedItem>Material-UI</UsedItem>
                <UsedItem>Nodemailer</UsedItem>
                <UsedItem>Axios</UsedItem>
    
              </UsedList> */}
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://partyplanningcommittee.herokuapp.com/" >
              <CodeThumbnail src={require("../assets/PPC_screenshot.jpg")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Group Project #2: Party Planning Committee</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://partyplanningcommittee.herokuapp.com/" >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/zilchlorf/Party-Planner"
                    
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Based on "The Office" theme, this is a fun, web based application to record, retrieve, and display information required to plan and host a great party. Inputs will be gathered from the user and added to a unique event page with details about the event: Name of Event, Description, Location/Venue, Date and Time. An interactive map will be present on the event page as well as an interactive message board for guests to post information about the party or send a notice to the host. Users will be able to add, edit, and update the event details and guest list information as needed and post to the event page. Users can search for their events as well.
              </PortDescription>

              {/* <UsedList>
                <UsedItem>React</UsedItem>
                <UsedItem>Sequelize</UsedItem>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express</UsedItem>
    
              </UsedList> */}
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://employee-catalog2.herokuapp.com/" alt="Employee catalog application snapshot" >
              <CodeThumbnail src={require("../assets/Employee_Catalog.jpg")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Employee Catalog</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://employee-catalog2.herokuapp.com/" >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/zilchlorf/Employee_Catalog"
                    
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                React application displaying a table of employees. The table can be sorted or filtered by any of the columns of information.
              </PortDescription>
{/* 
              <UsedList>
                <UsedItem>React</UsedItem>
                <UsedItem>Axios</UsedItem>
    
              </UsedList> */}
            </PortAllText>
          </PortRow>
         

          <hr />
          <PortRow>
            <a href="https://agile-ocean-45821.herokuapp.com/" >
              <CodeThumbnail src={require("../assets/Burger Devourer.jpg")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Burger Devourer</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://agile-ocean-45821.herokuapp.com/" >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/zilchlorf/Burger_Devourer"
                    
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              Burger Devourer is a restaurant app that lets users input the burgers or sandwiches they'd like to eat. Each entry builds a list of the burgers with a corresponding button "Devour it!" that moves the burger to a new list which designates the burger as being "devoured."
              </PortDescription>

              {/* <UsedList>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>express</UsedItem>
                <UsedItem>express-handlebars</UsedItem>
                <UsedItem>mysql</UsedItem>
              </UsedList> */}
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://google-bookworm.herokuapp.com/" >
              <CodeThumbnail src={require("../assets/Google bookworm.jpg")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Google Bookworm</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://google-bookworm.herokuapp.com/" >
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/zilchlorf/Google_Bookworm"
                    
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
              React-based Google Books Search app. Search and Save books that you want to add to your reading list.
              </PortDescription>

              {/* <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>MongoDb</UsedItem>
                <UsedItem>Express</UsedItem>
              </UsedList> */}
            </PortAllText>
          </PortRow>
        </div>
      </div>
    );
  }
}

export default Code;
