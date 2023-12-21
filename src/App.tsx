import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";
import UserEmail from "./components/UserEmail";

function App() {
  return (
    <div className="App container">
      <Counter />
      <h1 className="mb-4">Name</h1>
      <Users />
      <h1 className="mb-4 mt-4">Email</h1>
      <UserEmail />
    </div>
  );
}

export default App;
