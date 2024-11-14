import React, { Component } from "react";
import axios from "axios";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../shared/App.css";
import './css/Register.css';
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Login from './Login';
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import Login from './Login';



class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profile: "",
      password: "",
      password2: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  handleImageChange(event) {
    const file = event.target.files[0]; // 선택한 파일 가져오기
    console.log(file)

    this.setState({ profile: file }); // 프로필 이미지 파일 저장
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', this.state.username);
    formData.append('profile', this.state.profile);
    formData.append('password', this.state.password);
    formData.append('password2', this.state.password2);

    axios
      .post("http://127.0.0.1:8000/users/register/", formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then((response) => {
        console.log(response.data);
        // this.props.history.push("/"); // 임시
        window.location.href = '/';
      });
  }


  render() {

    return (
<div className="signup">
  <form onSubmit={this.handleSubmit} className="box">
    <h1>Pystagram</h1>
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

        </div>
      </div>

      <div className="field">
        <label className="label">프로필</label>
        <div className="control has-icons-left">
          <input
            type="file"
            placeholder="이메일을 입력하세요."
            className="input"
            accept="image/*"
            onChange={this.handleImageChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">비밀번호</label>
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
        </div>
      </div>

      <div className="field">
        <label className="label">비밀번호 확인</label>
        <div className="control has-icons-left">
          <input
            type="password"
            placeholder="*******"
            className="input"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            required
          />
        </div>
      </div>
    
      <div className="link-div">
        <button className="btn btn-signup" type="submit">회원가입</button>
        <a href="/">로그인 페이지로 이동</a>
      </div>
    </div>
  </form>
</div>
    );
  }
}

export default Register;
