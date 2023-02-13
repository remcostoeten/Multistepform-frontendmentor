import StepOneForm from './stepOneForm';
import Footer from './Footer';

export default function Main() {
	return (
		<>
			<main className='info'>
				<div className='info__inner'>
					<h1>Personal Info</h1>
					<p>
						Please provide your name, email address and phone
						number.
					</p>
					<StepOneForm />
				</div>
				<Footer />
			</main>
		</>
	);
}
