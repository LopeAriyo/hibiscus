import React from "react";
import ReactPlayer from "react-player";

class Video extends React.Component {
    render() {
        return (
            <div className="video-card">
                <ReactPlayer url={this.props.url} />
            </div>
        );
    }
}
export default Video;
