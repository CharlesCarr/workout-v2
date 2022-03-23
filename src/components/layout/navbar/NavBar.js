import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Functional Component Imports
import MainNav from "./MainNav";
import HamNav from "./HamNav";
// MUI Imports
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// CSS Module Import
import classes from "./NavBar.module.css";
// Firebase Imports
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";

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

            <MainNav
              isLoggedIn={props.isLoggedIn}
              handleCloseNavMenu={handleCloseNavMenu}
              logoutHandler={logoutHandler}
            />

            <HamNav
              isLoggedIn={props.isLoggedIn}
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              logoutHandler={logoutHandler}
            ></HamNav>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
