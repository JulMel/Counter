import "./IncreaseButton.css";

const IncreaseButton = (props) => {
  return (
    <button className="btn" onClick={props.pricti}>
      Přičti 1
    </button>
  );
};

export default IncreaseButton;
