import React from 'react';
import StarRatings from 'react-star-ratings';

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

const Body = ({ bodyText, bodyStyles, nameInput, messageInput, emailInput, ratingInput, handleMessageInput, showNameInput, showMessageInput, showRatingInput, showEmailInput, numberOfStars }) => (
	<div style={bodyStyles}>
		<div style={defaultMessageStyles}>
			<p>{bodyText}</p>
		</div>
		{showNameInput &&
			<div>
				<input type='text' rows="5" value={nameInput} placeholder="Enter Your Name" required onChange={e => handleMessageInput('name', e.target.value)} style={defaultMessageStyles} />
			</div>
		}

		{showEmailInput &&
			<div>
				<input type='email' rows="5" value={emailInput} placeholder="Enter Your Email" required onChange={e => handleMessageInput('email', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
		{showMessageInput &&
			<div>
				<textarea rows="5" value={messageInput} placeholder="Enter Your Feedback" onChange={e => handleMessageInput('message', e.target.value)} style={defaultMessageStyles} />
			</div>
		}
		{showRatingInput &&
			<div style={defaultMessageStyles}>
				<StarRatings 
					rating={ratingInput}
					starRatedColor="blue"
					changeRating={newRating => handleMessageInput('rating', newRating)}
					numberOfStars={numberOfStars}
					name='rating'
					starDimension="35px"
					starSpacing="10px"
				/>
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
	showNameInput: true,
	numberOfStars: 5
}

export default Body;
