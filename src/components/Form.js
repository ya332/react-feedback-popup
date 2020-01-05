import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const formStyles = {
    position: 'fixed',
    backgroundColor: '#FAFAFA',
    right: '45px',
    border: '1px solid #dcdcdc',
    borderRadius: '6px 6px 0 0',
    zIndex: '50000',
    bottom: '0px'
}

class Form extends Component {

  render(){
    const {
      headerStyles,
      headerText,
      handleClose,
      handleSubmit,
      handleMessageInput,
      handleEmailInput,
      handleRatingInput,
      messageInput,
      emailInput,
      ratingInput,
      showEmailInput,
      showMessageInput,
      showRatingInput
    } = this.props;

    return(
      <div style={formStyles}>
        <Header
          styles={headerStyles}
          headerText={headerText}
          handleClose={handleClose}
          />
        <Body
          showEmailInput={showEmailInput}
          showMessageInput={showMessageInput}
          showRatingInput={showRatingInput}
          handleMessageInput={handleMessageInput}
          handleEmailInput={handleEmailInput}
          handleRatingInput={handleRatingInput}
          messageInput={messageInput}
          emailInput={emailInput}
          ratingInput={ratingInput}
        />
        <Footer
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          />
      </div>
    )
  }

}

export default Form;
