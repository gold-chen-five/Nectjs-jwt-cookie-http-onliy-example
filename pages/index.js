import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  
  const mainDivStyle = {
    padding: "1em",
  };

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");

    console.log(user);
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };

  return (
    <div style={mainDivStyle}>
      
      <button onClick={() => handleGetUser()}> User </button>

      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  );
}
