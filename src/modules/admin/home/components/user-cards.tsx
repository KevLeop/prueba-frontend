import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(2),
  },
  root: {
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
    background: "#fff",
    padding: theme.spacing(4),
    borderRadius: "15px",
    maxWidth: 215,
  },
  header: {
    color: theme.palette.grey[400],
    height: "25px",
  },
  photoContainer: {
    marginBottom: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  verified: {
    height: 20,
  },
  channelUserName: {
    fontWeight: theme.typography.fontWeightBold,
  },
  chanelNameContainer: {
    marginBottom: theme.spacing(1),
  },
  followButton: {
    textTransform: "none",
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

interface IOwnProps {
  email: string;
  name: string;
  lastName: string;
}

const UserCard: React.FC<IOwnProps> = ({ email, name, lastName }) => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <div className={classes.photoContainer}>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </div>
        <Grid container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={3}>
            <Typography variant="body2" className={classes.channelUserName}>
              {`${name} ${lastName}`}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {/* <img className={classes.verified} alt="verfied" src={verified} /> */}
          </Grid>
        </Grid>
        <div className={classes.chanelNameContainer}>
          <Typography color="textSecondary" variant="caption">
            {email}
          </Typography>
        </div>
        <Button
          disableElevation
          color="primary"
          variant="contained"
          size="small"
          className={classes.followButton}
        >
          Ver más
        </Button>
      </Grid>
    </div>
  );
};

export default UserCard;
