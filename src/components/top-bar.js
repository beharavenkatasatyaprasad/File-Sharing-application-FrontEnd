import React, { Component } from "react";

export default class TopBar extends Component {
  render() {
    return (
      <div className="app-top-bar shadow">
        <div className="app-top-bar-inner">
          <div className="app-top-bar-left">
            <div className="site-name">
              SHARE <i className="icon-paper-plane" />
            </div>
          </div>
          <div className="app-top-bar-right">
            <div className="app-top-bar-right-inner">
              <ul className="user-profile-menu">
                <li
                  onClick={() => {
                    if (this.props.onShowLoginForm) {
                      this.props.onShowLoginForm(true);
                    }
                  }}
                  className="user-signin-button"
                >
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                  {"  "} Sign in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
