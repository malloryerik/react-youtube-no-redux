// create a new component, should produce html
import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import SearchBar from "./components/search-bar.js"
import VideoList from "./components/video-list.js"
import VideoDetail from "./components/video-detail.js"

const API_KEY = "AIzaSyD-B__IzUJlTZJ1fh6g3Y04KCQfOc8C6go"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
        videos: [],
        selectedVideo: null,
    }

    this.videoSearch("amanda")
} // !constructor


videoSearch(term) {
    
    YTSearch({ key: API_KEY, term: term}, (videos)=> {
        this.setState({ 
            videos: videos,
            selectedVideo: videos[0]
        }) // this.setState({ videos: videos})
    })

}

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
            onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}

        />
      </div>
    )
  }
}

// take component's HTML and put it on the screen
ReactDOM.render(<App />, document.querySelector(".container"))
