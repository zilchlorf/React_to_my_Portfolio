import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Max. I'm a software developer based in Beaverton, Oregon.</CenteredHeader>
        <CenteredHeader> I'm also a nature enthusiast, musician and avid hiker.
        I play bass guitar for the Oregon-based
                        band, <a href="https://kizik.bandcamp.com/"> KiZiK.</a></CenteredHeader>
                        <CenteredHeader> <p>My background in Journalism and my
        professional experience in Information Technology has prepared me to confidently take on nearly
                        any occupational challenge.</p></CenteredHeader>
      </div>
    );
  }
}

export default Home;
