import { useMultistepForm } from '../useMultistepForm';
// const { steps, currentStepIndex } = [useMultistepForm];

export default function Footer() {
	return (
		<>
			<footer>
				{/* {currentStepIndex}aa */}
				<button className='btn btn--go-back' href='#'>
					Go back
				</button>
				<button className='btn btn--primary'>Next step</button>
			</footer>
		</>
	);
}
