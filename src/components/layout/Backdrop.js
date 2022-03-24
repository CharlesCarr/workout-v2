import classes from "./Backdrop.module.css";

function Backdrop(props) {
  const closeModal = () => {
    props.setWorkoutModalIsOpen(false);
  };

  return (
    <div
      className={classes.backdrop}
      onClick={props.onClick}
      onClick={closeModal}
    />
  );
}
export default Backdrop;
