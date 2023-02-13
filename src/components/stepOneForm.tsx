export default function StepOneForm() {
	return (
		<>
			<form>
				<div className='input-wrapper'>
					<label>Name</label>
					<input type='text' placeholder='e.g. Stephen King' />
				</div>
				<div className='input-wrapper'>
					<label>Email Address</label>
					<input
						type='email'
						placeholder='e.g. stephenking@larem.com'
					/>
				</div>
				<div className='input-wrapper'>
					<label>Phone number</label>
					<input
						type='phone number'
						placeholder='e.g. +1 234 567 890'
					/>
				</div>
			</form>
		</>
	);
}
