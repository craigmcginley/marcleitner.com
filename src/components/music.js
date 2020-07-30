import React, { Component } from 'react';

class Music extends Component {
  render() {
    return (
      <div className="container mx-auto flex justify-center">
        <iframe style={{ border: 0, width: '100%', maxWidth: '400px', height: '786px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3975592533/size=large/bgcol=333333/linkcol=ffffff/transparent=true/" seamless><a href="http://dogsofharvest.bandcamp.com/album/roll-away-the-stones">Roll Away The Stones by Marc Leitner &amp; The Dogs of Harvest</a></iframe>
      </div>
    )
  }
}

export default Music;
