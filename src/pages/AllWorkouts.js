import Workout from "../components/all_workouts/Workout";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import Divider from '@mui/material/Divider';

function AllWorkoutsPage(props) {
  const noWorkouts = <Typography className="noWorkouts" variant="h5"><p>(No Saved Workouts to Display)</p></Typography>;
  const testTrue = props.wholeWorkout.length === 0;

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const header = "ALL WORKOUTS";

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Typography className="pagetitle" variant="h3" gutterBottom>
          {header}
        </Typography>
      </ThemeProvider>

      {testTrue && noWorkouts}

      {props.wholeWorkout.map((workout) => {
        return (
          <Workout key={workout.uidd} uid={workout.uidd} title={workout.title} fullWorkout={workout.fullWorkout} />
        );
      })}
    </div>
  );
}
export default AllWorkoutsPage;
