import StepOneForm from './stepOneForm';
import StepTwoForm from './StepTwoForm';
import Footer from './Footer';

export default function Main() {
	return (
		<>
			<main className='info'>
				<div className='info__inner'>
					<StepOneForm />
					<StepTwoForm />
				</div>
				<Footer />
			</main>
		</>
	);
}
