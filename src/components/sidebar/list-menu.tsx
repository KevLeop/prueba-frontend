import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";

import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const useStyles = makeStyles((theme) => ({
  listItem: {
    height: theme.spacing(10),
    color: "#fff",
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
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText primary="Mensajes" />
        </ListItem>
        <ListItem button className={classes.listItem}>
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
