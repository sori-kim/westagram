import React from "react";
import logoImg from "../../images/logo_text.png";
import { Link, withRouter } from "react-router-dom";
import "../../pages/Login/Login.scss";

export class Login extends React.Component {
  //여기에 함수 정의하기 (조건이 성립되었을때 메인페이지로 이동하도록!)
  // button에 onClick 이벤트 주기
  // Link 태그 썼을때와 onClick으로 줬을때 구분해서 이해하기
  // 콘솔에 this.props 한번 찍어보고 뭐가 있나 살펴보기

  goToMain() {
    this.props.history.push("/main");
    console.log("this.props: ", this.props);
  }

  render() {
    return (
      <main className="Login">
        <div className="login-wrapper">
          <img className="logo" alt="logo" src={logoImg} />
          <input
            className="id-input login"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            className="password-input login"
            type="password"
            placeholder="비밀번호"
          />
          <button onClick={this.goToMain.bind(this)} className="login-btn">
            로그인
          </button>

          <Link to="/" className="forget_pw">
            비밀번호를 잊으셨나요?
          </Link>
        </div>

        <div className="signup-wrapper">
          <p>계정이 없으신가요?</p>
          <span>가입하기</span>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
