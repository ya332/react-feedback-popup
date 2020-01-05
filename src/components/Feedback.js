import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import PropTypes from 'prop-types';

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
			ratingInput: 0
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
		handleSubmit({
			name: this.state.nameInput,
			message: this.state.messageInput,
			rating: this.state.ratingInput,
			email: this.state.emailInput
		});
		if (showButtonOnSubmit) {
			this.setState({ showButton: true });
		}
		this.setState({ showForm: false, nameInput: '', messageInput: '', ratingInput: 0, emailInput: '' });
		handleClose();
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
			buttonStyles,
			headerStyles,
			headerBtnStyles,
			headerBtnText,
			bodyText,
			showNameInput,
			showEmailInput,
			showRatingInput,
			showMessageInput
		} = this.props;

		return (
			<div>
				{this.state.showForm &&
					<div>
						<Form
							headerText={headerText}
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
						/>
					</div>
				}
				{this.state.showButton &&
					<Button
						styles={buttonStyles}
						text={buttonText}
						handleButtonClick={this.handleButtonClick}
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
