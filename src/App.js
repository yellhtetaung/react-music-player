import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube, { baseParams } from "./api/youtube";
import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    onSelectVideo: null,
  };
  onFormSubmit = async (value) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: value,
      },
    });
    this.setState({
      videos: response.data.items,
      onSelectVideo: response.data.items[0],
    });
  };

  onSelectVideo = (video) => {
    this.setState({ onSelectVideo: video });
  };

  render() {
    const { videos, onSelectVideo } = this.state;
    return (
      <div className="root">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <VideoDetail video={onSelectVideo} />
            </div>
            <div className="col-md-6">
              <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
