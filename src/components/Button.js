import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultButtonStyles = {
  fontSize:'15px',
  background: "#34495e",
  color: "#fff",
  fontWeight: "bold",
  padding:'10px 15px',
  position:'fixed',
  borderRadius:'5px 5px 0 0',
  border: 'none',
  bottom:0,
  backgroundColor:'#34495e',
  width: 'auto'
}

class Button extends Component {


  render(){
    const {handleButtonClick, text, styles, position, handleCustomPosition} = this.props;
    return(
      <button type='button' onClick={handleButtonClick} style={handleCustomPosition(position, styles)}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  handleCustomPosition: PropTypes.func,
  handleButtonClick: PropTypes.func,
  styles: PropTypes.object,
  text: PropTypes.string,
  position: PropTypes.string
}

Button.defaultProps = {
  position: PropTypes.string,
  styles: defaultButtonStyles,
  text: 'Feedback?  ☝️',
  handleButtonClick: () => this.handleButtonClick
}


export default Button;
