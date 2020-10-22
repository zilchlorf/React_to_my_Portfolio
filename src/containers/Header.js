import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 15rem;
  height: 20rem;
  border-radius: 20%;
`;

const ProfileTitle = styled.h1`
  color: black;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: black;
  background-color: whitesmoke;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage  src={require('../assets/Profile_room_pic.JPG')} alt='Max William Edmonds'/>
          <ProfileTitle>Max William Edmonds</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;