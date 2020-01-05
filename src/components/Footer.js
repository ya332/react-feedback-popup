import React from 'react';

const defaultFooterStyles = {
  height: '50px',
  boxSizing: 'border-box',
  background: '#34495e',
  overflow: 'hidden'
}
const closeBtnStyle = {
  float:'left',
  color: '#fff',
  backgroundColor: '#DC143C',
  lineHeight: '30px',
  borderRadius: '3px',
  border: '2px solid #ff4742',
  fontSize: '13px',
  fontWeight: 'bold'
}
const submitBtnStyle = {
  float:'right',
  color: '#fff',
  backgroundColor: '#DC143C',
  lineHeight: '30px',
  borderRadius: '3px',
  border: '2px solid #ff4742',
  fontSize: '13px',
  fontWeight: 'bold'
}

const Footer = ({handleSubmit, footerStyles, handleClose}) => (
  <div style={footerStyles}>
    <div style={{padding:'10px'}}>
    <button onClick={handleSubmit} style={submitBtnStyle} type='button'>Submit</button>
    <button onClick={handleClose} style={closeBtnStyle} type='button'>Close</button>
    </div>
  </div>
)

Footer.defaultProps = {
  footerStyles: defaultFooterStyles
}

export default Footer;
