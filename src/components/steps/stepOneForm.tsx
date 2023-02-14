import StepTwoForm from './StepTwoForm';
import StepNavigation from '../StepNavigation';
export default function StepOneForm() {
	const showStep = [];
	const required = (
		<span className='input-wrapper__required'>This field is required</span>
	);
	return (
		<>
			<form>
				<div className='input-wrapper'>
					<h1>Personal info</h1>
					<p>
						Please provide your name , email address, and phone
						number
					</p>
					<label>
						{required}
						Name
						<input
							required
							type='text'
							placeholder='e.g. Remco Stoeten'
						/>
					</label>
				</div>
				<div className='input-wrapper'>
					{required}
					<label>
						Email Address
						<input
							required
							type='email'
							placeholder='e.g. remcostoeten@hotmail.com'
						/>
					</label>
				</div>
				<div className='input-wrapper'>
					{required}
					<label>
						Phone number
						<input
							required
							type='phone number'
							placeholder='e.g. +3dd221 6 36 59 07 07'
						/>
					</label>
				</div>
				<StepNavigation
					handler={function (arg0: 'next' | 'prev'): void {}}
					step={0}
				/>
			</form>
		</>
	);
}
