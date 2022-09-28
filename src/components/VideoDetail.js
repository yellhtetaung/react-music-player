import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    console.log(this.props);
    if (!this.props.video) {
      return <div>Loading...</div>;
    }
    let videoUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    return (
      <div>
        <iframe
          src={videoUrl}
          width="100%"
          height="380"
          title={this.props.video.snippet.title}
        />
        <h3>{this.props.video.snippet.title}</h3>
      </div>
    );
  }
}

export default VideoDetail;
