import { FormWrapper } from './FormWrapper';

export default function StepTwoForm() {
	return (
		<>
			<form>
				<FormWrapper
					title='Step Two'
					paragraph='Please provide your name, email address and phone number.
				'>
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
				</FormWrapper>
			</form>
		</>
	);
}
