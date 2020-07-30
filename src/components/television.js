import React, { Component } from 'react';

class Television extends Component {
  render() {
    return (
      <div className="container mx-auto flex justify-center">
        <style>{".embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }"}</style>
        <div className="embed-container w-full">
          <iframe src="https://www.youtube.com/embed/videoseries?list=PLpjp3eHLKMedSaT5upTtWuKXWJcZRICCV" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default Television;
