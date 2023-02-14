import Intro from './components/Intro';
import Aside from './components/Aside';
import Main from './components/MainContent';
export default function App() {
	const currentStepIndex = 2;
	const steps = 3;
	return (
		<>
			<div className='container'>
				<Intro />
				<div className='wrapper'>
					<div className='wrapper__inner first-step'>
						<Aside />
					</div>
					<Main />
				</div>
			</div>
		</>
	);
}
