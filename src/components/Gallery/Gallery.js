import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import "./Gallery.css";

/* popout the browser and maximize to see more columns! -> */
const gallery = () => (
    <div className="gallery-card">
        <div className="gallery-grid">
            {" "}
            <Gallery photos={photos} direction={"column"} />{" "}
        </div>
    </div>
);

export default gallery;
