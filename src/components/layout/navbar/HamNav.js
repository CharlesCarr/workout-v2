import { Link } from "react-router-dom";
// MUI Imports
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// CSS Module Import
import classes from "./NavBar.module.css";

const HamNav = (props) => {
  return (
    <>
      {props.isLoggedIn && (
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={props.handleOpenNavMenu}
            className={classes.navtext}
            color="error"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={props.anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(props.anchorElNav)}
            onClose={props.handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Link className={classes.link} to="/new-workout">
              <MenuItem onClick={props.handleCloseNavMenu}>
                <Typography color="primary">NEW WORKOUT</Typography>
              </MenuItem>
            </Link>
            <Link className={classes.link} to="/all-workouts">
              <MenuItem onClick={props.handleCloseNavMenu}>
                <Typography color="primary">ALL WORKOUTS</Typography>
              </MenuItem>
            </Link>
            <Link className={classes.link} to="/today">
              <MenuItem onClick={props.handleCloseNavMenu}>
                <Typography color="primary">TODAY</Typography>
              </MenuItem>
            </Link>
            <MenuItem>
              <Typography color="primary" onClick={props.logoutHandler}>
                LOGOUT
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default HamNav;
