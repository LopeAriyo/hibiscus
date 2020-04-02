import React from "react";
import ReactPlayer from "react-player";

//https://www.youtube.com/watch?v=08vLAtwUNKg
//https://youtu.be/08vLAtwUNKg
//08vLAtwUNKg

class Video extends React.Component {
    render() {
        return <ReactPlayer url={this.props.url} playing />;
    }
}
export default Video;
