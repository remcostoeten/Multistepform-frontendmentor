import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
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
						<Sidebar />
					</div>
					<Main />
				</div>
			</div>
		</>
	);
}
