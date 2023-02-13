import { useMultistepForm } from '../useMultistepForm';

function Footer() {
	const { steps, currentStepIndex, step, isFirstStep, next, back } =
		useMultistepForm([<div>One</div>, <div>Two</div>]);
	return (
		<>
			<div></div>
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
					<button
						onClick={next}
						type='button'
						className='btn btn--primary'>
						Next step
					</button>
				</form>
			</footer>
		</>
	);
}

export default Footer;
