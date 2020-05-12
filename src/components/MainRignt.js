import React from "react";
import Others from "./Others";
import "./MainRight.scss";
import sori from "../images/sori.jpg";

export class MainRight extends React.Component {
  render() {
    return (
      <div class="main-right">
        <div class="profile-me">
          <img class="myImg" alt="me" src={sori} />
          <div class="profile-right">
            <div class="profile-id">x.xiaori</div>
            <div class="profile-desc">김소리 Sori Kim (Rosie)</div>
          </div>
        </div>

        <div class="recommendation">
          <div class="reco-title">
            <span class="span-forme">회원님을 위한 추천</span>
            <span class="span-all">모두 보기</span>
          </div>

          <div class="profile-others">
            <Others />
          </div>
        </div>

        <div class="footer">
          <p class="desc">
            소개 . 도움말 . 홍보 센터 . API .채용 정보 . 개인정보처리방침 . 약관
            . 위치 . 인기계정 . 해시태그 . 언어
          </p>
          <p class="copyright">© 2020 INSTAGRAM FROM FACEBOOK</p>
        </div>
      </div>
    );
  }
}

export default MainRight;
