import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Backdrop from "./components/Backdrop/Backdrop";
class App extends Component {
    state = {
        sideNavigationVisible: false
    };

    handleHamburgerClick = () => {
        this.setState(prevState => {
            return { sideNavigationVisible: !prevState.sideNavigationVisible };
        });
    };

    handleBackDropClick = () => {
        this.setState({ sideNavigationVisible: false });
    };

    render() {
        let backdrop;

        if (this.state.sideNavigationVisible) {
            backdrop = <Backdrop handleClick={this.handleBackDropClick} />;
        }

        return (
            <div style={{ height: "100%" }}>
                <Navbar handleHamburgerClick={this.handleHamburgerClick} />
                <SideNavbar visible={this.state.sideNavigationVisible} />
                {backdrop}
                <main style={{ marginTop: "75px" }}>
                    <h4>
                        Hibiscus: Discover Fresh Flavours from West Africa with
                        the Observer Rising Star of Food 2017{" "}
                    </h4>
                    <p>
                        Nigerian-inspired flavours and cooking methods can
                        transform everyday dishes into something spectacular.
                        Whether it’s experimenting with new ingredients
                        (Hibiscus Chicken), reimagining old favourites
                        (Grapefruit and Guava Cheesecake; Baked Kuli Kuli Cod
                        with Cayenne Yam Chips; Lagos Mess), exploring different
                        techniques (Cheat’s Ogi, Chin Chin) or finding
                        alternatives to everyday staples (Plantain Mash with
                        Ginger, Corn and Okra Gravy; Nigerian Roast Veg), Lopè
                        will help you discover all that modern Nigerian food has
                        to offer.
                    </p>
                </main>
                <footer className="footer"></footer>
            </div>
        );
    }
}

export default App;
