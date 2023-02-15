import StepTwoForm from './StepTwoForm';
import StepNavigation from '../StepNavigation';
import { useState,useRef } from 'react';
export default function StepOneForm() {
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
	const showStep = [];
	const required = (
		<span className='input-wrapper__required'>This field is required</span>
	);
	return (
		<>
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
			<form>
				<div className='input-wrapper'>
					<h1>Personal info</h1>
					<p>
						Please provide your name , email address, and phone
						number
					</p>
					<label>
						Name
						<input
							required
							type='text'
							placeholder='e.g. Remco Stoeten'></input>
						{required}
					</label>
				</div>
				<div className='input-wrapper'>
					{required}
					<label>
						Email Address
						<input
							required
							type='email'
							placeholder='e.g. remcostoeten@hotmail.com'
						/>
					</label>
				</div>
				<div className='input-wrapper'>
					{required}
					<label>
						Phone number
						<input
							required
							type='phone number'
							placeholder='e.g. +3dd221 6 36 59 07 07'
						/>
					</label>
					0{' '}
				</div>
				<StepNavigation
					handler={function (arg0: 'next' | 'prev'): void {}}
					step={0}
				/>
			</form>
		</>
	);
}
