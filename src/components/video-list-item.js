import React from 'react'


const VideoListItem = ({video, onVideoSelect}) => {    // const video = props.video <-this is what you'd do if were using "props" instaead of {video} for arg
    console.log(video)
    const title = video.snippet.title
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li onClick={() => onVideoSelect(video)}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>

                </div>
            </div>
        </li>
    )
}

export default VideoListItem