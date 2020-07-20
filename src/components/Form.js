import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const formStyles = {
    position: 'fixed',
    backgroundColor: '#FAFAFA',
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
      position,
      handleClose,
      handleSubmit,
      handleMessageInput,
      handleEmailInput,
      handleRatingInput,
      handleCustomPosition,
      messageInput,
      emailInput,
      ratingInput,
      showEmailInput,
      showMessageInput,
      showRatingInput,
      numberOfStars,
      bodyText,
    } = this.props;

    var customFormStyles = handleCustomPosition(position, formStyles); 
    return(
      <div style={{...customFormStyles , ...this.props.style}}>
        <Header
          styles={headerStyles}
          headerText={headerText}
          handleClose={handleClose}
          />
        <Body
          bodyText={bodyText}
          numberOfStars={numberOfStars}
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
