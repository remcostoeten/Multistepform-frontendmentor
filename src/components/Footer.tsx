import { useMultistepForm } from '../useMultistepForm';

function Footer() {
	const { steps, currentStepIndex } = useMultistepForm([
		<div>One</div>,
		<div>Two</div>,
	]);
	return (
		<>
			<div></div>
			<footer className='footer'>
				<form className='footer__navigation'>
					<button className='btn btn--go-back'>Go back</button>
					<button className='btn btn--primary'>Next step</button>
					<h1>aa{steps.length}</h1>
					<h1>aa{currentStepIndex + 1}</h1>
				</form>
			</footer>
		</>
	);
}

export default Footer;
