import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const express = require("express");
// const mysql = require("mysql");

// const app = express();
// app.use(express.json());

// const db = mysql.createConnection({
//   userfirstname: "test",
//   host:"localhost",
//   password:"password",
//   database:"LoginSystem",
// });
// app.post('/login', (req,res)=>{
//   db.query("INSERT INTO users(username,password) VALUES (?,?)", 
//   [username,password],
//   (err,result)=>{
//     console.log(err);
//   }
//   );
// });
// app.listen(3001, () =>{
//   console.log("running server");
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
