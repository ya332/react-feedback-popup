import React from 'react';

const defaultButtonStyles = {
  position:'absolute',
  fontSize:'20px',
  right:'15px',
  color: '#ffffff',
  background: 'none',
  border: 0,
  fontWeight: 'bold',
  lineHeight: '40px',
  height: '40px'
}

const defaultHeaderStyles = {
  lineHeight: '40px',
  paddingLeft: '15px',
  height: '40px',
  borderRadius: '6px 6px 0 0',
  backgroundColor: '#34495e',
  color: '#FFFFFF',
  fontSize: '18px',
  fontWeight: '500',
  overflow: 'hidden'
}

const Header = ({headerText, headerBtnText, handleClose, headerStyles, headerBtnStyles}) => (
  <div style={headerStyles}>
    {headerText}
    <button onClick={handleClose} style={headerBtnStyles} type='button'>{headerBtnText}</button>
  </div>
)

Header.defaultProps = {
  headerText: 'Have Feedback? 📝',
  headerBtnText: 'X',
  headerBtnStyles: defaultButtonStyles,
  headerStyles: defaultHeaderStyles
}

export default Header;
