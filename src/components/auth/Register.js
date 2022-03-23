// imports
import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import classes from "./Register.module.css";

const Register = (props) => {
  return (
    <>
      <ThemeProvider theme={props.theme}>
        <TextField
          onChange={(e) =>
            props.setRegisterInformation({
              ...props.registerInformation,
              email: e.target.value,
            })
          }
          value={props.registerInformation.email}
          type="text"
          className={classes.inputField}
          variant="outlined"
          label="Email"
          color="primary"
          error={Boolean(props.errors?.email)}
          helperText={(props.errors?.email)}
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <TextField
          value={props.registerInformation.confirmEmail}
          onChange={(e) =>
            props.setRegisterInformation({
              ...props.registerInformation,
              confirmEmail: e.target.value,
            })
          }
          type="text"
          className={classes.inputField}
          variant="outlined"
          label="Confirm Email"
          color="primary"
          error={Boolean(props.errors?.confirmEmail)}
          helperText={(props.errors?.confirmEmail)}
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <TextField
          value={props.registerInformation.password}
          onChange={(e) =>
            props.setRegisterInformation({
              ...props.registerInformation,
              password: e.target.value,
            })
          }
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
          className={classes.inputField}
          variant="outlined"
          label="Password"
          color="primary"
          error={Boolean(props.errors?.password)}
          helperText={(props.errors?.password)}
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <TextField
          value={props.registerInformation.confirmPassword}
          onChange={(e) =>
            props.setRegisterInformation({
              ...props.registerInformation,
              confirmPassword: e.target.value,
            })
          }
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
          className={classes.inputField}
          variant="outlined"
          label="Confirm Password"
          color="primary"
          error={Boolean(props.errors?.confirmPassword)}
          helperText={(props.errors?.confirmPassword)}
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <div className={classes.btnContainer}>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={props.handleRegister}
            color="secondary"
            sx={{ marginTop: 2, marginBottom: 2, borderRadius:"40px" }}
          >
            Create Account
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={() => props.setIsRegistering(false)}
            color="secondary"
            sx={{borderRadius: "40px"}}
          >
            Go Back
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Register;
