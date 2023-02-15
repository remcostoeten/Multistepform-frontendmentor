import { useRef, useState } from "react";
export default function NumberInputForm() {
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false); // ADDED
  function style(error) {
    if (error) {
      return { backgroundColor: "rgba(255, 0, 0, 0.5)" };
    }
  }
  const ref = useRef();
  const handleBlur = (event) => {
    if (!error) {
      if (event.target.validity.patternMismatch) {
        ref.current.focus();
        setError(true);
        setShowErrorText(true);
      }
    }
    if (error) {
      setShowErrorText(false);
    }
  };
  const handleChange = (event) => {
    const newValueIsValid = !event.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        setError(false);
        setShowErrorText(false);
      }
    }
    setUserInput(event.target.value);
  };
  const handleFocus = () => {
    if (error) {
      setShowErrorText(true);
    }
  };
  return (
    <form>
      <label htmlFor="number-input-field">Enter a number: </label>
      <input
        type="text"
        id="number-input-field"
        inputMode="decimal"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
             pattern="[-]?[0-9]*[.,]?[0-9]+"

        style={style(error)}
        value={userInput}
      />
      {showErrorText && (
        <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
          Please make sure you've entered a <em>number</em>
        </p>
      )}
    </form>
  );
}
