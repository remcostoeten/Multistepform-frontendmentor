import { useMultistepForm } from '../useMultistepForm';

function Footer() {
	const steps = 1;
	const { currentStepIndex } = useMultistepForm([]);

	return (
		<>
			<div>
				{currentStepIndex} / {steps}
			</div>
			<footer className='footer'>
				<form className='footer__navigation'>
					<button className='btn btn--go-back'>Go back</button>
					<button className='btn btn--primary'>Next step</button>
				</form>
			</footer>
		</>
	);
}

export default Footer;
