import "./ResetButton.css";

const ResetButton = (props) => {
  return (
    <button className="btn" onClick={props.resetuj}>
      Reset
    </button>
  );
};

export default ResetButton;
