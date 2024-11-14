import React, { Component } from "react";
import axios from "axios";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../shared/App.css";
// import { withRouter } from "react-router-dom";
import './css/Login.css';

class Login extends Component {
  constructor(props) {
      console.log("[Login.js] constructor");
      super(props);
      this.state = {

      username: "",
      password: "",
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleChange(event) { 
      const target = event.target;
      this.setState({
          [target.name]: target.value,
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log("[Login.js] handleSubmit");
      /* 여기에 입력받은 값들 API 전송 */

      axios
          .post("http://localhost:8000/users/login/", {
              username: this.state.username,
              password: this.state.password,
          })
          .then((response) => {
              if (response.status < 300) {
                  console.log("[Login.js] Call props.doLogin");
                  // this.props.doLogin();
                  localStorage.setItem("token", response.data["token"]);
                  localStorage.setItem("username", this.state.username);
                  console.log(response.data);
                  window.location.href = '/feed';

              }
          });
  }

  render() {
    return (

<div className="login">

  <form onSubmit={this.handleSubmit} className="box">
  <h1> Pystagram</h1>
  <div className="input-div">
    <div className="field">
      <label className="label">아이디</label>
      <div className="control has-icons-left">
        <input
          type="text"
          placeholder="아이디를 입력하세요."
          className="input"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>
    </div>

    <div className="field">
      <label className="label">패스워드</label>
      <div className="control has-icons-left">
        <input
          type="password"
          placeholder="*******"
          className="input"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faLock} />
        </span>
      </div>
    </div>

      <div className="link-div">
        <button className="btn btn-login" type="submit">로그인</button>
        <a className="signup-link" href="/register">회원가입</a>
      </div>
      
    </div>
  </form>
</div>

    );
  }
}

export default Login;

