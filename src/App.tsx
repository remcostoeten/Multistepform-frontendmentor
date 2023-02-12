import Aside from './components/aside';
import Main from './components/main';
export default function App() {
	return (
		<>
			<div className='container'>
				<div className='wrapper'>
					<div className='wrapper__inner'>
						<Aside />
					</div>
					<Main />
				</div>
			</div>
		</>
	);
}
