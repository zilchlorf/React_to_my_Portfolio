import React from "react";
import "./AboutMe.css"
import { Container, Row, Col, Card } from "react-bootstrap";

function AboutMe() {

    return (
        <Container>

            <Row >
                <>
                </>
                <Col id="PortfolioContainer" className="header" md={8}>
                    <img id="ProfilePic" mode='fit' src="images/Roots profile pic.jpg" alt="profile Pic" />

                </Col>
                <Col md={4}>
                    <Card id="Card">
                        Nature enthusiast, musician and avid hiker. I play bass guitar for the legendary Oregon-based
                        band, <a href="https://kizik.bandcamp.com/"> KiZiK.</a>
                        <p>My background in Journalism and my
                        professional experience in Information Technology has prepared me to confidently take on nearly
                        any occupational challenge.</p>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;