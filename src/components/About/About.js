import React from "react";
import Author from "../../assets/author-images/Lope3.png";
import "./About.css";

const about = () => (
    <div className="about-container">
        <div className="about-card">
            <div className="author-info">
                <h1>About</h1>
                <p>
                    Lopè Ariyo is currently one of the UK’s leading voices in
                    West African cuisine and her determination to see Nigerian
                    and West African food brought to the forefront saw her named
                    as The Observer’s Rising Star in Food for 2017. Focusing on
                    a contemporary approach by combining African flavours with
                    cosmopolitan-style cooking practices, Ariyo produces
                    exciting twists to exotic ingredients that will have you
                    licking your plate. She graduated with a bachelor’s degree
                    in mathematics from Loughborough University. Whilst
                    studying, Lopè took part in a cookery competition organised
                    by Red Magazine and Harper Collins where she blew away the
                    judges with her unique style and take on Nigerian food. She
                    went on to win the competition landing herself a cookbook
                    deal with Harper Collins. At the moment, Lopè works at the
                    newly opened Ikoyi restaurant in St James’ Market in London
                    which has received rave reviews for its take on West African
                    dishes. In her spare time Lopè finds time to host
                    supperclubs, cater to small dining events, bake, work on her
                    blog and Youtube channel.
                </p>
            </div>
            <div className="author-image">
                <img src={Author} alt="Lope Ariyo" />
            </div>
        </div>
    </div>
);

export default about;
