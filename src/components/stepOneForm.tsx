import StepTwoForm from './StepTwoForm';

export default function StepOneForm() {
	const showStep = [];
	return (
		<>
			<form>
				<h1>step one</h1>
				<div className='input-wrapper'>
					<label>Name</label>
					<input
						required
						type='text'
						placeholder='e.g. Stephen King'
					/>
				</div>
				<div className='input-wrapper'>
					<label>Email Address</label>
					<input
						required
						type='email'
						placeholder='e.g. stephenking@larem.com'
					/>
				</div>
				<div className='input-wrapper'>
					<label>Phone number</label>
					<input
						required
						type='phone number'
						placeholder='e.g. +1 234 567 890'
					/>
				</div>
			</form>
		</>
	);
}
