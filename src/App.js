import React from 'react';
import logo from './logo.svg';
import FeedBack from './components/Feedback';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
			<FeedBack
				position="left"
				numberOfStars={5}
				headerText="Hello"
				bodyText="Custom Body test"
				buttonText="This is also custom"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 
					fetch('https://formspree.io/moqjznjg', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', // or 'PUT'
						body: JSON.stringify(data),
					}).then((response) => { 
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					})
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>
	);
}

export default App;
