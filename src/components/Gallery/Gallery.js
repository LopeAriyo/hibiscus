import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import "./Gallery.css";

/* popout the browser and maximize to see more columns! -> */
const gallery = () => (
    <div className="gallery-card">
        <h1>Gallery</h1>
        <div className="gallery-grid">
            {" "}
            <Gallery photos={photos} direction={"column"} />{" "}
        </div>
        <div>
            {" "}
            <p>All Images by Ellis Parrinder</p>
        </div>
    </div>
);

export default gallery;
