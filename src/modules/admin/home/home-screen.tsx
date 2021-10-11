import React from "react";
import UserCard from "./components/user-cards";

const HomeScreen = () => {
  return (
    <div>
      <h1>Hola HomeScreen</h1>
      <UserCard name="Kevin" lastName="Valverde" email="kevinleo93@gmail.com" />
    </div>
  );
};

export default HomeScreen;
