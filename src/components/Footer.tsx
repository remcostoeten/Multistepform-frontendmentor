import { useMultistepForm } from '../useMultistepForm';

function Footer() {
	const steps = 1;
	// const { currentStepIndex } = useMultistepForm([]);
	const { currentStepIndex } = 1;

	return (
		<div className='footer'>
			<form className='footer__form'>
				<div>{currentStepIndex}</div>
			</form>
		</div>
	);
}

export default Footer;
