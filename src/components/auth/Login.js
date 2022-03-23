// imports
import { ThemeProvider } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <>
      <ThemeProvider theme={props.theme}>
        <TextField
          onChange={props.handleEmailChange}
          value={props.email}
          type="text"
          className={classes.inputField}
          variant="outlined"
          label="Email"
          color="primary"
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <TextField
          value={props.password}
          onChange={props.handlePasswordChange}
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
          className={classes.inputField}
          variant="outlined"
          label="Password"
          color="primary"
          error={Boolean(props.errors?.invalidLogin)}
          helperText={(props.errors?.invalidLogin)}
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <div className={classes.btnContainer}>
          <Button
            variant="contained"
            onClick={props.handleSignIn}
            color="secondary"
            className={classes.btn}
            sx={{ marginTop: 2, marginBottom: 2, borderRadius:"40px"}}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            onClick={() => props.setIsRegistering(true)}
            color="secondary"
            className={classes.btn}
            sx={{borderRadius:"40px"}}
          >
            Create Account
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
