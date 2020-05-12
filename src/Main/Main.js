import React from "react";
import Feed from "../components/Feed";
import MainRight from "../components/MainRignt";
import "./Main.scss";
import "../Login/Reset.scss";
import logo from "../images/logo_text.png";
import explore from "../images/explore.png";
import heart from "../images/heart.png";
import profile from "../images/profile.png";

export class Main extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-container">
            <div class="nav-left">
              <img alt="logo" class="logo" src={logo} />
            </div>

            <div class="nav-center">
              <input
                type="text"
                placeholder="&#xF002; Search"
                // style="font-family: Arial, FontAwesome;"
              />
            </div>

            <div class="nav-right">
              <img alt="explore icon" src={explore} />
              <img alt="heart icon" src={heart} />
              <img alt="profile icon" src={profile} />
            </div>
          </div>
        </nav>

        <main>
          <div class="feeds">
            <Feed />
          </div>
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
