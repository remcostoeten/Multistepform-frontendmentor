import Aside from './components/aside';
import Main from './components/main';
export default function App() {
	const currentStepIndex = 2;
	const steps = 3;
	return (
		<>
			<div className='container'>
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
