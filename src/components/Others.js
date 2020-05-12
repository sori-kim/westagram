import React from "react";
import sewoon from "../images/sewoon.jpg";
import "./Others.scss";

export class Others extends React.Component {
  render() {
    return (
      <div class="other">
        <div class="other-left">
          <img class="otherImg" alt="sewoon" src={sewoon} />
          <div class="others-desc">
            <div class="profile-id">sewoon_j</div>
            <div class="profile-desc">회원님을 팔로우합니다.</div>
          </div>
        </div>
        <div class="follow">팔로우</div>
      </div>
    );
  }
}

export default Others;
