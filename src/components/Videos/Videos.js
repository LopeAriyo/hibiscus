import React from "react";
import "./Videos.css";
import Video from "./Video";

class Videos extends React.Component {
    render() {
        const videolist = [
            {
                number: 1,
                title: "Nigerian Coconut Fried Rice",
                url: "https://www.youtube.com/watch?v=08vLAtwUNKg"
            },
            {
                number: 2,
                title: "Lope Ariyo's Chicken Drumsticks",
                url: "https://www.youtube.com/watch?v=dDIZw82dpQM"
            },
            {
                number: 3,
                title: "Peanut Toffee Bars",
                url: "https://www.youtube.com/watch?v=Kdv7gkUaM_w"
            }
        ];

        return (
            <div className="videos-container">
                <div className="section-title">
                    <h1>Videos</h1>
                </div>
                {videolist.map(video => (
                    <Video url={video.url} key={video.number} />
                ))}
            </div>
        );
    }
}

export default Videos;
