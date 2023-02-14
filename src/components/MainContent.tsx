import StepOneForm from './steps/stepOneForm';
import StepTwoForm from './steps/StepTwoForm';
import StepThreeForm from './steps/StepThreeForm';
import Footer from './Footer';
import { useState } from 'react';
import StepNavigation from './StepNavigation';
export default function Main() {
	const [step, setStep] = useState(0);
	const steps = [
		<StepOneForm />,
		<StepTwoForm />,
		<StepThreeForm />,
	] as const;

	const stepHandler = (direction: 'next' | 'prev') => {
		if (direction === 'next' && !(step >= steps.length - 1)) {
			setStep(step + 1);
		}

		if (direction === 'prev' && !(step <= 0)) {
			setStep(step - 1);
			console.log('test');
		}
	};

	return (
		<>
			<main className='info'>
				<div className='info__inner'>{steps[step]}dd</div>
				{/* <Footer /> */}
			</main>
		</>
	);
}
