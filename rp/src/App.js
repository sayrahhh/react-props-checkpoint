import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
// import logo from "./IMG-20191029-WA0007.jpg";

// console.log(logo);

function App() {
  function handleName() {
    alert(this.fullName);
  }

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Profile
        fullName="Sarah Usman"
        handle={handleName}
        bio="a writer and a tech gyal. "
        profession="Fullstack Developer"
      >
        {/* <img style={{ width: "8rem" }} alt="timer" src={logo} /> */}
      </Profile>
    </div>
  );
}

export default App;
