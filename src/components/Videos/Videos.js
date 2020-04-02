import React from "react";
import Video from "./Video";
import "./Videos.css";

const videos = () => (
    <div className="videos-container">
        <div className="section-title">
            <h1>Videos</h1>
        </div>
        <Video url="https://www.youtube.com/watch?v=08vLAtwUNKg" />
    </div>
);

export default videos;
