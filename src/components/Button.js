import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultButtonStyles = {
  fontSize:'15px',
  background: "#34495e",
  color: "#fff",
  fontWeight: "bold",
  padding:'10px 15px',
  position:'fixed',
  right:'5%',
  borderRadius:'5px 5px 0 0',
  border: 'none',
  bottom:0,
  backgroundColor:'#34495e',
  color: '#ffffff',
  width: 'auto'
}

class Button extends Component {

  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(){
    const {handleButtonClick} = this.props;
  }

  render(){
    const {handleButtonClick, text, styles} = this.props;
    return(
      <button onClick={handleButtonClick} type='button' style={styles}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  handleButtonClick: PropTypes.func,
  styles: PropTypes.object,
  text: PropTypes.string
}

Button.defaultProps = {
  styles: defaultButtonStyles,
  text: 'Feedback?  ☝️',
  handleButtonClick: () => {}
}


export default Button;
