import { Divider, Drawer, DrawerProps, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import ListMenu from "./list-menu";
import { sideBarWidth } from "../../common/constants";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: sideBarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: theme.palette.primary.main,
    width: sideBarWidth,
  },
  toolbar: { ...theme.mixins.toolbar, textAlign: "center", color: "#fff" },
}));

interface IOwnProps extends DrawerProps {}

const SideBar: React.FC<IOwnProps> = ({ variant, open, onClose }) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <div className={classes.toolbar}>
        <Typography variant="h3">Prueba</Typography>
      </div>
      <Divider />
      <ListMenu />
    </Drawer>
  );
};

export default SideBar;
