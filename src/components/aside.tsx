export default function Aside() {
	return (
		<>
			<aside className='intro'>
				<div className='intro__step first-step active'>
					<h4>Step 1</h4>
					<h3> Your info</h3>
				</div>
				<div className='intro__step'>
					<h4>Step 2</h4>
					<h3>Select plan</h3>
				</div>
				<div className='intro__step'>
					<h4>Step 3</h4>
					<h3>Add-on</h3>
				</div>
				<div className='intro__step'>
					<h4>Step 4</h4>
					<h3>Summary</h3>
				</div>
			</aside>
		</>
	);
}
