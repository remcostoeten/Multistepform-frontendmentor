import React from 'react';
import Main from './Main';

function StepNavigation({
	handler,
	step,
}: {
	handler: (arg0: 'next' | 'prev') => void;
	step: number;
}) {
	return (
		<div>
			{' '}
			{!(step === 0) && (
				<button onClick={() => handler('prev')}>Previous</button>
			)}
			<button onClick={() => handler('next')}>Volgende</button>{' '}
		</div>
	);
}

export default StepNavigation;
