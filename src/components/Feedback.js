import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import PropTypes from 'prop-types';


const isEmpty = str => !str.trim().length;

const handleCustomPosition = ((position, formStyles) => {
	var customFormStyles;
	if (position==="left") {
		customFormStyles = {...formStyles, left: "5%"};
	}
	else {
		customFormStyles = {...formStyles, right: "5%"};
	} 
	return customFormStyles;
})

class Feedback extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showButton: true,
			showForm: false,
			showModal: false,
			nameInput: '',
			messageInput: '',
			emailInput: '',
			ratingInput: -1
		};
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMessageInput = this.handleMessageInput.bind(this);
	}
	handleMessageInput(inputName, content) {
		if (inputName === 'email') {
			this.setState({ emailInput: content });
		} else if (inputName === 'name') {
			this.setState({ nameInput: content });
		} else if (inputName === 'rating') {
			this.setState({ ratingInput: content });
		} else if (inputName === 'message') {
			this.setState({ messageInput: content });
		}
	}
	handleRatingInput(ratingInput) {
		this.setState({ ratingInput: ratingInput });
	}
	handleNameInput(nameInput) {
		this.setState({ nameInput: nameInput });
	}
	handleEmailInput(emailInput) {
		this.setState({ emailInput: emailInput });
	}
	handleButtonClick() {
		const { handleButtonClick } = this.props;
		this.setState({ showButton: false, showForm: true });
		handleButtonClick();
	}
	handleSubmit() {
		const { showButtonOnSubmit, handleSubmit, handleClose } = this.props;
		// Check if the values are missing.
		if (isEmpty(this.state.nameInput) || isEmpty(this.state.emailInput) || isEmpty(this.state.messageInput) || (this.state.ratingInput===-1)) {
			alert("Fields are missing!");
		} else {
			handleSubmit({
				name: this.state.nameInput,
				message: this.state.messageInput,
				rating: this.state.ratingInput,
				email: this.state.emailInput
			});
			if (showButtonOnSubmit) {
				this.setState({ showButton: true });
			}
			this.setState({ showForm: false, nameInput: '', messageInput: '', ratingInput: -1, emailInput: '' });
			handleClose();
		}
	}
	handleClose() {
		const { handleClose, showButtonOnClose } = this.props;
		if (showButtonOnClose) {
			this.setState({ showButton: true });
		}
		this.setState({ showForm: false });
		handleClose();
	}

	render() {
		const {
			headerText,
			buttonText,
			position,
			buttonStyles,
			headerStyles,
			headerBtnStyles,
			headerBtnText,
			bodyText,
			showNameInput,
			showEmailInput,
			showRatingInput,
			showMessageInput,
			numberOfStars,
			style
		} = this.props;

		return (
			<div>
				{this.state.showForm &&
					<div>
						<Form
							style={style}
							headerText={headerText}
							numberOfStars={numberOfStars}
							position={position}
							headerStyles={headerStyles}
							headerBtnStyles={headerBtnStyles}
							headerBtnText={headerBtnText}
							handleClose={this.handleClose}
							handleSubmit={this.handleSubmit}
							bodyText={bodyText}
							showNameInput={showNameInput}
							showEmailInput={showEmailInput}
							showRatingInput={showRatingInput}
							showMessageInput={showMessageInput}
							nameInput={this.state.nameInput}
							emailInput={this.state.emailInput}
							ratingInput={this.state.ratingInput}
							messageInput={this.state.messageInput}
							handleMessageInput={this.handleMessageInput}
							handleCustomPosition={handleCustomPosition}
						/>
					</div>
				}
				{this.state.showButton &&
					<Button
						position={position}
						styles={buttonStyles}
						text={buttonText}
						handleButtonClick={this.handleButtonClick}
						handleCustomPosition={handleCustomPosition}
					/>
				}
			</div>
		)
	}
}

Feedback.propTypes = {
	headerText: PropTypes.string,
	bodyText: PropTypes.string,
	position: PropTypes.string,
	handleClose: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleButtonClick: PropTypes.func,
	showButtonOnClose: PropTypes.bool,
	showButtonOnSubmit: PropTypes.bool,
	buttonStyles: PropTypes.object,
	headerStyles: PropTypes.object,
	headerBtnStyles: PropTypes.object,
	bodyStyles: PropTypes.object,
	footerStyles: PropTypes.object,
	buttonText: PropTypes.string,
	headerBtnText: PropTypes.string,
	showEmailInput: PropTypes.bool,
	showRatingInput: PropTypes.bool,
	showMessageInput: PropTypes.bool
}

Feedback.defaultProps = {
	position: 'right',
	handleSubmit: () => { },
	handleClose: () => { },
	handleButtonClick: () => { },
	showButtonOnClose: true,
	showButtonOnSubmit: true,
	modal: false
}

export default Feedback;
