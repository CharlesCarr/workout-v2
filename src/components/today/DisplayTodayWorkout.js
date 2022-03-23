import SelectedWorkout from "./SelectedWorkout";

function DisplayTodayWorkout(props) {
  const findWorkout = () => {

    // switched the names of the variables but think may need something new here to find the correct one from the db

    //   logic here to check the workoutDropDown id to find the appropriate fullWorkout and then display that fullWorkout
    for (let i = 0; i < props.wholeWorkout.length; i++) {
      if (props.wholeWorkout[i].uidd === props.workoutDropDown) {
        for (
          let j = 0;
          j < props.wholeWorkout[i].fullWorkout.length;
          j++
        ) {
          //   this gets the array of objects of the correct workout
          let correctWorkoutArr = props.wholeWorkout[i].fullWorkout[j];
          return correctWorkoutArr;
        }
      }
    }
  };

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
