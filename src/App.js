import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Book from "./components/Book/Book";
import About from "./components/About/About";
import Videos from "./components/Videos/Videos";
import Gallery from "./components/Gallery/Gallery";
import Press from "./components/Press/Press";
import Contact from "./components/Contact/Contact";
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
                {backdrop}
                <SideNavbar visible={this.state.sideNavigationVisible} />
                <main style={{ marginTop: "80px" }}>
                    <Switch>
                        <Route path="/" component={Book} exact />
                        <Route path="/about" component={About} />
                        <Route path="/videos" component={Videos} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/press" component={Press} />
                        <Route path="/contact" component={Contact} />
                        <Route render={() => <div>Page Not Found</div>} />
                    </Switch>
                </main>
                <footer className="footer"></footer>
            </div>
        );
    }
}

export default App;
