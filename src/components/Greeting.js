import { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>Its nice to see you here! </p>}
      {changedText && <p>changed! </p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}
export default Greeting;
