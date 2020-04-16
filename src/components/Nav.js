import React from "react";

export default class Nav extends React.Component {
  state = {
    navOpen: false
  };

  toggleSidenav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }
  render() {
    return (
      <nav
        className={
          "site-nav nav-padding" + (this.state.navOpen ? " expand-nav" : "")
        }
        id="site-nav"
      >
        <div className="site-nav-left" />
        <div className="site-nav-middle site-nav-logo">
          <img
            alt="Code Radio"
            src="https://cdn-media-1.freecodecamp.org/code-radio/FCC-logo.png"
          />
        </div>
      </nav>
    );
  }
}
