import { Typography } from "@material-ui/core";
import React from "react";
import UserCard from "./components/user-cards";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
}));
const HomeScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">Usuarios</Typography>
      <div className={classes.cards}>
        <UserCard
          name="Kevin"
          lastName="Valverde"
          email="kevinleo93@gmail.com"
        />
        <UserCard
          name="Juan"
          lastName="Valverde"
          email="kevinleo93@gmail.com"
        />
        <UserCard
          name="Martha"
          lastName="Valverde"
          email="kevinleo93@gmail.com"
        />
        <UserCard
          name="Joaquin"
          lastName="Valverde"
          email="kevinleo93@gmail.com"
        />
        <UserCard
          name="Fatima"
          lastName="Valverde"
          email="kevinleo93@gmail.com"
        />
      </div>
    </>
  );
};

export default HomeScreen;
