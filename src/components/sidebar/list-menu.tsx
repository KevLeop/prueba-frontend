import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Paths } from "../../modules/routes";

const useStyles = makeStyles((theme) => ({
  listItem: {
    height: theme.spacing(10),
    color: "#fff",
  },
  activeItem: {
    background: "#8E80FF",
  },
  listIcon: {
    color: "#fff",
  },
}));
const ListMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <List component="nav">
        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={Paths.HOME}
          activeClassName={classes.activeItem}
          exact
        >
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>

        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={Paths.MESSAGES}
          activeClassName={classes.activeItem}
        >
          <ListItemIcon className={classes.listIcon}>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText primary="Mensajes" />
        </ListItem>

        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={Paths.PROFILE}
          activeClassName={classes.activeItem}
        >
          <ListItemIcon className={classes.listIcon}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>

        <Divider />
      </List>
    </div>
  );
};

export default ListMenu;
