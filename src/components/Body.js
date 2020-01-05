import React from 'react';
const defaultBodyStyles = {
	padding: '10px',
	fontSize: '14px',
	display: 'block !important'
}

const defaultMessageStyles = {
	boxSizing: 'border-box',
	padding: '10px 10px 0 10px',
	overflow: 'hidden',
	width: '300px',
	fontFamily: 'arial'
}

const Body = ({ bodyText, bodyStyles, nameInput, messageInput, emailInput, ratingInput, handleMessageInput, showNameInput, showMessageInput, showRatingInput, showEmailInput }) => (
	<div style={bodyStyles}>
		<div style={defaultMessageStyles}>
			<p>{bodyText}</p>
		</div>
		{showNameInput &&
			<div>
				<input type='text' rows="5" value={nameInput} placeholder="Enter Your Name" onChange={e => handleMessageInput('name', e.target.value)} style={defaultMessageStyles} />
			</div>
		}

		{showEmailInput &&
			<div>
				<input type='email' rows="5" value={emailInput} placeholder="Enter Your Email" onChange={e => handleMessageInput('email', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
		{showRatingInput &&
			<div>
				<textarea rows="5" value={ratingInput} placeholder="Enter Your Rating" onChange={e => handleMessageInput('rating', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
		{showMessageInput &&
			<div>
				<textarea rows="5" value={messageInput} placeholder="Enter your feedback here." onChange={e => handleMessageInput('message', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
	</div>
)

Body.defaultProps = {
	bodyText: 'Need help? Have feedback? I\'m a human so please be nice and I\'ll fix it!',
	bodyStyles: defaultBodyStyles,
	showEmailInput: true,
	showRatingInput: true,
	showMessageInput: true,
	showNameInput: true
}

export default Body;
