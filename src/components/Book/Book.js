import React from "react";
import Jacket from "./HibiscusJacket.JPG";

import "./Book.css";

const book = props => (
    <div className="book-card">
        <div className="book-jacket">
            <img src={Jacket} alt="Hibiscus Jacket" />
        </div>
        <div className="book-description">
            <div className="book-title">
                <h1>Hibiscus</h1>
                <h3>
                    Discover Fresh Flavours from West Africa with the Observer
                    Rising Star of Food 2017{" "}
                </h3>
            </div>
            <div className="book-blurb">
                <p>
                    Hibiscus is the debut cookbook from Lope Ariyo, publish June
                    1st 2017. As an energetic and supremely talented cook,
                    Hibiscus contains fresh, fuss-free meals that are full of
                    flavour. With chapters including Fruits, Vegetables &
                    Tubers; Grains & Pulses; Meat & Poultry and Baking &
                    Desserts, there’s something for every occasion and for
                    everyone.
                </p>
                <br />
                <p>
                    Nigerian-inspired flavours and cooking methods can transform
                    everyday dishes into something spectacular. Whether it’s
                    experimenting with new ingredients (Hibiscus Chicken),
                    reimagining old favourites (Grapefruit and Guava Cheesecake;
                    Baked Kuli Kuli Cod with Cayenne Yam Chips; Lagos Mess),
                    exploring different techniques (Cheat’s Ogi, Chin Chin) or
                    finding alternatives to everyday staples (Plantain Mash with
                    Ginger, Corn and Okra Gravy; Nigerian Roast Veg), Lopè will
                    help you discover all that modern Nigerian food has to
                    offer.
                </p>
            </div>
            <div className="purchase-buttons">
                <button>
                    <i className="fab fa-amazon"></i>
                    Buy on Amazon UK
                </button>
                <button>
                    <i className="fab fa-amazon"></i> Buy on Amazon US
                </button>
            </div>
        </div>
    </div>
);

export default book;
