import StepTwoForm from './StepTwoForm';

export default function StepOneForm() {
	const showStep = [];
	return (
		<>
			<form>
				<div className='input-wrapper'>
					<h1>Perssonal info</h1>
					<p>
						Please provide your name , email address, and phone
						number
					</p>
					<label>
						Name
						<input
							required
							type='text'
							defaultValue='e.g. Remco Stoeten'
						/>
					</label>
				</div>
				<div className='input-wrapper'>
					<label>
						Email Address
						<input
							required
							type='email'
							defaultValue='e.g. remcostoeten@hotmail.com'
						/>
					</label>
				</div>
				<div className='input-wrapper'>
					<label>
						Phone number
						<input
							required
							type='phone number'
							defaultValue='e.g. +3dd221 6 36 59 07 07'
						/>
					</label>
				</div>
			</form>
		</>
	);
}
