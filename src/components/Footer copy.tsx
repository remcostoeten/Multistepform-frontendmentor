import { useMultistepForm } from '../useMultistepForm';

function Footer() {
	const { steps } = useMultistepForm([]);
	return (
		<div className='footer'>
			<form className='footer__form'>
				<div>1 / 2</div>
			</form>
		</div>
	);
}

export default footer;
