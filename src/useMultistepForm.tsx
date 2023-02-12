import { ReactElement } from 'react';
export function useMultistepForm(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	function next() {
		setCurrentStepIndex((i: number) => {
			if (i >= steps.length - 1) return;
			return i + 1;
		});
	}

	function back() {
		setCurrentStepIndex((i: number) => {
			if (i <= 0) return i;
			return i - 1;
		});
	}

	function goTo(index: number) {
		setCurrentStepIndex(index);
	}

	return {
		currentStepIndex,
		next,
		back,
		steps,
		goTo,
	};
}

function useState(arg0: number): [any, any] {
	throw new Error('Function not implemented.');
}
