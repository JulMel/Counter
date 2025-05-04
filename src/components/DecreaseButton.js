import "./DecreaseButton.css";

const DecreaseButton = (props) => {
  return (
    <button className="btn" onClick={props.odecti}>
      Odečti 1
    </button>
  );
};

export default DecreaseButton;
