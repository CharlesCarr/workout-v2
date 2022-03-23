import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// MUI Imports
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
// CSS Module Import
import classes from "./NavBar.module.css";
// Firebase Imports
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.replace("/");
      }
    });
  }, []);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        history.replace("/");
        props.setWholeWorkout([]);
        props.setIsLoggedIn(false);
      })
      .catch((err) => alert(err.message));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={props.colorTheme}>
      <AppBar position="static" className={classes.appbar} color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              color="error"
            >
              MY WORKOUT APP
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              MY WORKOUT APP
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {props.isLoggedIn && (
                <Link className={classes.link} to="/new-workout">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={classes.navtext}
                  >
                    New Workout
                  </Button>
                </Link>
              )}
              {props.isLoggedIn && (
                <Link to="/all-workouts" className={classes.link}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={classes.navtext}
                  >
                    All Workouts
                  </Button>
                </Link>
              )}
              {props.isLoggedIn && (
                <Link className={classes.link} to="/today">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={classes.navtext}
                  >
                    Today
                  </Button>
                </Link>
              )}

              {props.isLoggedIn && (
                <Button
                  onClick={logoutHandler}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className={classes.navtext}
                >
                  Logout
                </Button>
              )}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                className={classes.navtext}
                color="error"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link className={classes.link} to="/new-workout">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="primary">
                      NEW WORKOUT
                    </Typography>
                  </MenuItem>
                </Link>
                <Link className={classes.link} to="/all-workouts">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="primary">
                      ALL WORKOUTS
                    </Typography>
                  </MenuItem>
                </Link>
                <Link className={classes.link} to="/today">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="primary">
                      TODAY
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <Typography
                    textAlign="center"
                    color="primary"
                    onClick={logoutHandler}
                  >
                    LOGOUT
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
