import { useMultistepForm } from '../useMultistepForm';
import StepTwoForm from './steps/StepTwoForm';
import StepOneForm from './steps/stepOneForm';

function Footer() {
	const {
		steps,
		currentStepIndex,
		step,
		isFirstStep,
		next,
		back,
		isLastStep,
	} = useMultistepForm([<StepOneForm />, <StepTwoForm />]);
	return (
		<>
			<footer className='footer'>
				<form className='footer__navigation'>
					{!isFirstStep && (
						<button
							onClick={back}
							type='button'
							className='btn btn--go-back'>
							Go back
						</button>
					)}
					{!isLastStep && (
						<button
							onClick={next}
							type='button'
							className='btn btn--primary'>
							Next step
						</button>
					)}
				</form>
			</footer>
		</>
	);
}

export default Footer;
