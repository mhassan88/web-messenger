import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import bg from "../assets/images/bg-img.png";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.grad,
    width: 425,
    height: 700,
    position: "absolute",
    opacity: "85%",
    color: "white",
    fontFamily: '"OpenSans"',
    fontSize: "25px",
    textAlign: "center",
  },
  pos: {
    position: "absolute",
    margin: "200px 100px",
  },
  scaling: {
    scale: "1 1.2",
    margin: "40px",
  },
}));

export default function BgImage() {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <div className={classes.root}>
        <div className={classes.pos}>
          <div>
            <FontAwesomeIcon
              icon={faCommentDots}
              size="2x"
              className={classes.scaling}
            />
          </div>
          Converse with anyone with any language
        </div>
      </div>
      <img
        src={bg}
        alt="People interacting with each other in the background"
      />
    </Hidden>
  );
}
