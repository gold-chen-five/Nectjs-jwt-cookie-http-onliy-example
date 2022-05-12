import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  
  const mainDivStyle = {
    padding: "1em",
  };

  const handleGetUser = async () => {
   

    try{
      const user = await axios.get("/api/user");
      console.log(user);
    }
    catch(e){
      console.log(e)
    }
    
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
