import React from 'react';
import Main from './Main';

function onAddButtonClick() {
	console.log('aa');
}

function StepNavigation({
	handler,
	step,
}: {
	handler: (arg0: 'next' | 'prev') => void;
	step: number;
}) {
	return (
		<footer className='footer'>
			<div className='footer__navigation'>
				{' '}
				{!(step === 0) && (
					<button
						className='btn btn--primary'
						onClick={() => handler('prev')}>
						Previous
					</button>
				)}
				<button
					className='btn btn--go-back'
					onClick={() => handler('next')}>
					Volgende
				</button>{' '}
				<button type='button' onClick={onAddButtonClick}>
					Submit
				</button>
			</div>
		</footer>
	);
}

export default StepNavigation;
