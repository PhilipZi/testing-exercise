import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>Its nice to see you here! </Output>}
      {changedText && <Output>changed! </Output>}
      <button onClick={changeTextHandler}>Changed Text!</button>
    </div>
  );
}
export default Greeting;
