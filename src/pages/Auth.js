import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Firebase Imports
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import classes from "./Auth.module.css";
// MUI Imports
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// Functional Component Imports
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

function AuthPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    invalidLogin: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // think maybe will have to call a function that will be in another component so that can do stuff with JSX
        props.displaySavedWorkouts();
      } else if (user) {
        history.replace("/new-workout");
      }
    });
  }, []);

  // Taken from hotel website's validation - edit for this use case
  // Function to determine valid email from regex
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.replace("/new-workout");
        props.setIsLoggedIn(true);
      })
      // .catch((err) => alert(err.message));
      .catch(() => setErrors({ invalidLogin: "Invalid Login Credentials" }));
    // .catch(() => {
    //   setErrors({ invalidLogin: "Invalid Login Credentials" });
    // }
  };

  const handleRegister = () => {
    if (!isEmail(registerInformation.email)) {
      return setErrors({ email: "Please enter a vaild email" });
    } else if (registerInformation.email !== registerInformation.confirmEmail) {
      return setErrors({ confirmEmail: "Please confirm emails are the same" });
    } else if (registerInformation.password.length < 8) {
      return setErrors({
        password: "Password needs to be more than 8 characters",
      });
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      return setErrors({
        confirmPassword: "Please confirm passwords are the same",
      });
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        history.replace("/new-workout");
      })
      .catch((err) => alert(err.message));
  };

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const header = "WORKOUT TRACKER";

  // can create another theme so that can change spacing and colors
  // then can wrap the theme provider after passing through props

  // const testTheme = createTheme();
  // testTheme.spacing(5);

  const newColorTheme = createTheme({
    palette: {
      primary: {
        main: "#1E1F28",
      },
      secondary: {
        main: "#EF3651",
      },
      error: {
        main: "#EF3651",
      },
    },
  });

  return (
    <div className={classes.app}>
      <ThemeProvider theme={theme}>
        <Typography className="pagetitle" variant="h3" gutterBottom>
          {header}
        </Typography>
      </ThemeProvider>

        <Typography className={classes.authTitle} variant="h5">
          {isRegistering ? "CREATE ACCOUNT" : "SIGN IN"}
        </Typography>

        <div className={classes.loginRegisterContainer}>
          {isRegistering ? (
            <Register
              errors={errors}
              theme={newColorTheme}
              handleRegister={handleRegister}
              setIsRegistering={setIsRegistering}
              registerInformation={registerInformation}
              setRegisterInformation={setRegisterInformation}
            ></Register>
          ) : (
            <Login
              errors={errors}
              theme={newColorTheme}
              handleSignIn={handleSignIn}
              setIsRegistering={setIsRegistering}
              handleEmailChange={handleEmailChange}
              email={email}
              password={password}
              handlePasswordChange={handlePasswordChange}
            ></Login>
          )}
        </div>
      </div>
  );
}
export default AuthPage;
