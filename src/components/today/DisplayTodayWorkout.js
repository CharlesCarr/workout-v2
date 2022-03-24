import SelectedWorkout from "./SelectedWorkout";

function DisplayTodayWorkout(props) {
  const findWorkout = () => {
    //   logic here to check the workoutDropDown id to find the appropriate fullWorkout and then display that fullWorkout
    // loop through all workouts in the db
    for (let i = 0; i < props.wholeWorkout.length; i++) {
      // if that workout id matches the id of the workout drop down
      if (props.wholeWorkout[i].uidd === props.workoutDropDown) {
        // loop through exercises within that matched workout
        for (let j = 0; j < props.wholeWorkout[i].fullWorkout.length; j++) {
          //   this gets the array of objects of the correct workout
          let correctWorkoutArr = props.wholeWorkout[i].fullWorkout[j];
          return correctWorkoutArr;
        }
      }
    }
  };

  // mapping over the correct workout from selection and displaying the workout
  return findWorkout().map((exercise) => {
    return (
      <SelectedWorkout
        key={exercise.id}
        title={exercise.title}
        exercise={exercise.exercise}
        setsreps={exercise.setsreps}
        weight={exercise.weight}
        inputTitle={props.inputTitle}
        setInputTitle={props.setInputTitle}
      ></SelectedWorkout>
    );
  });
}
export default DisplayTodayWorkout;
