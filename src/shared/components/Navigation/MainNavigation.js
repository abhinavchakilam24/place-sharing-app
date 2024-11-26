import React from "react";

import './MainNavigation.css';
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MainNavigation = props => {
    return(
        <React.Fragment>
        <SideDrawer>
            <nav>
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title"><Link to='/'>Your Places</Link></h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;