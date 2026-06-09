import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <Counter count={count} />

      <div className="button-group">
        <Button text="Increase" onClick={increase} />
        <Button text="Decrease" onClick={decrease} />
        <Button text="Reset" onClick={reset} />
      </div>
    </div>
  );
}

export default App;