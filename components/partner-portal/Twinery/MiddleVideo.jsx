// Twinery Video in the Middle
import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "300",
      width: "500",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="flex justify-center">
        <YouTube
          videoId="Jo9qj8r8SE8"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}