import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
function App() {
  const adminUser = {
    name: "admin",
    email: "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);

    if( details.name == adminUser.name && details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
    
      setUser({
        name: details.name,
        email: details.email
      })
    }
    if(details.name != adminUser.name){
      setError("Name doesn't match");
    }
    if(details.email != adminUser.email){
      setError("Email doesn't match");
    }
    if(details.password != adminUser.password){
      setError("Password doesn't match");
    }
  }
  const Logout = () => {
    setUser({name: "", email: ""});
    setError("");
  }

  
  return (
    <div><h1>Book Ware</h1>
    <div className="App">
    {(user.email != "") ? (
    <div className = "welcome">
      <h2>Welcome, <span> {user.name} </span></h2>
      <button onClick = {Logout}> Logout </button>
      </div>
    ): (
     <LoginForm Login = {Login} error = {error}/>
    )}
    </div>
    </div>
  );
}

export default App;
