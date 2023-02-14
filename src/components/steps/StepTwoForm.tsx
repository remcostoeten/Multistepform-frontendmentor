export default function StepTwoForm() {
	return (
		<>
			<form>
				<h1>stepTwo</h1>
				<div className='input-wrapper'>
					<label>Naddwdwdddme</label>
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
