import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import ResetButton from "./components/ResetButton";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const decreaseOne = () => {
    const minusValue = value - 1;
    setValue(minusValue);
  };

  const increaseOne = () => {
    const plusValue = value + 1;
    setValue(plusValue);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <div className="counter">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton odecti={decreaseOne} />
      <IncreaseButton pricti={increaseOne} />
      <ResetButton resetuj={reset} />
    </div>
  );
};

export default App;
