import { useMultistepForm } from '../useMultistepForm';

function Footer() {
	const steps = 1;
	const { currentStepIndex } = useMultistepForm([]);

	return (
		<div className='footer'>
			<form className='footer__form'>
				<div>
					{currentStepIndex} / {steps}
				</div>
			</form>
		</div>
	);
}

export default Footer;
