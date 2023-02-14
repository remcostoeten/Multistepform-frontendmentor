import React from 'react';
import Main from './MainContent';

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
						className='btn--back'
						onClick={() => handler('prev')}>
						Previous
					</button>
				)}
				{step === 0 && (
					<button
						className='btn btn--primary'
						onSubmit={() => handler('next')}>
						Volgende
					</button>
				)}
			</div>
		</footer>
	);
}

export default StepNavigation;
