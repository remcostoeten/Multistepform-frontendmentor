import StepOneForm from './stepOneForm';
import Footer from './Footer';

export default function Main() {
	return (
		<>
			<main className='info'>
				<h1>Personal Info</h1>
				<p>Please provide your name, email address and phone number.</p>
				<StepOneForm />
				<Footer />
			</main>
		</>
	);
}
