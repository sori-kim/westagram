import React from "react";
import logoImg from "../images/logo_text.png";
import "./Login.scss";
import "./Reset.scss";

export class Login extends React.Component {
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
          <button className="login-btn">로그인</button>

          <p className="forget_pw">비밀번호를 잊으셨나요?</p>
        </div>

        <div className="signup-wrapper">
          <p>계정이 없으신가요?</p>
          <span>가입하기</span>
        </div>
      </main>
    );
  }
}

export default Login;
