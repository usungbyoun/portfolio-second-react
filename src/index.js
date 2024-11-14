import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Register from './Register';
import Login from './Login';
import Feed from './Feed';
import Profile from './Profile';
import Main from './Main';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register /> */}
    {/* <Login /> */}
    {/* <Appss /> */}

    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<Main />} />

        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// function Home() {
//   return(
//     <Link to = '/Next'>
//       <h1>click!@</h1>
//     </Link>
//   )
// }


// function Appss() {
//   return(
//       <Router>
//           <Routes>
//             <Route path ="/register" element={<Register />}/>
//           </Routes>
//       </Router>
//   )
// }