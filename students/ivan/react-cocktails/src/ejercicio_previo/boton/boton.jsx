import { useContext } from "react";
import NumberContext from "../context/context.provider";

function Boton() {
  const [numberValue, updateValue] = useContext(NumberContext);
  console.log(numberValue);

  function handleClick() {
    const newValue = numberValue + 1;
    updateValue(newValue);
  }

  return <button onClick={handleClick}>Boton</button>;
}

export default Boton;
