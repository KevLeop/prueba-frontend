import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from "./navbar";
import SideBar from "./sidebar/sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const Page: React.FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggleSideBar = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <Navbar toggleSideBar={toggleSideBar} />
      <Hidden xsDown>
        <SideBar variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <SideBar variant="temporary" open={open} onClose={toggleSideBar} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Page;
