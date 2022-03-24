import Workout from "../components/all_workouts/Workout";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function AllWorkoutsPage(props) {
  // to be displayed conditionally if no workouts saved
  const noWorkouts = (
    <Typography className="noWorkouts" variant="h5">
      <p>(No Saved Workouts to Display)</p>
    </Typography>
  );
  const testTrue = props.wholeWorkout.length === 0;

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Typography className="pagetitle" variant="h3" gutterBottom>
          ALL WORKOUTS
        </Typography>
      </ThemeProvider>

      {testTrue && noWorkouts}

      {/* mapping list of all workouts saved in db and display each one individually */}
      {props.wholeWorkout.map((workout) => {
        return (
          <Workout
            key={workout.uidd}
            uid={workout.uidd}
            title={workout.title}
            fullWorkout={workout.fullWorkout}
          />
        );
      })}
    </div>
  );
}
export default AllWorkoutsPage;
