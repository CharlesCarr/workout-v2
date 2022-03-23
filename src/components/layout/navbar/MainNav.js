import { Link } from "react-router-dom";
// MUI Imports
import { Box, Button } from "@mui/material";
// CSS Module Import
import classes from "./NavBar.module.css";

const MainNav = (props) => {
  return (
    <>
      {props.isLoggedIn && (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link className={classes.link} to="/new-workout">
            <Button
              onClick={props.handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.navtext}
            >
              New Workout
            </Button>
          </Link>

          <Link to="/all-workouts" className={classes.link}>
            <Button
              onClick={props.handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.navtext}
            >
              All Workouts
            </Button>
          </Link>

          <Link className={classes.link} to="/today">
            <Button
              onClick={props.handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              className={classes.navtext}
            >
              Today
            </Button>
          </Link>

          <Button
            onClick={props.logoutHandler}
            sx={{ my: 2, color: "white", display: "block" }}
            className={classes.navtext}
          >
            Logout
          </Button>
        </Box>
      )}
    </>
  );
};

export default MainNav;
