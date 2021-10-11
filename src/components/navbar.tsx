import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";
import { sideBarWidth } from "../common/constants";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#fff",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${sideBarWidth}px)`,
      marginLeft: sideBarWidth,
      background: "#fff",
    },
  },
}));

interface IOwnProps {
  toggleSideBar: () => void;
}

const Navbar: React.FC<IOwnProps> = ({ toggleSideBar }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
          onClick={toggleSideBar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="secondary">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
