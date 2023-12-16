import React from 'react'
import PropTypes from 'prop-types'
function Header({text,textColor,bgColor}) {
  const headstyle = {
    backgroundColor: bgColor,
    color:textColor,
  }
  return (
    <header style={headstyle}>
      <div className="container" >
      <h2>{text}</h2>
      </div>
   
    </header>
    
  )
}

Header.defaultProps = {
  text : 'Feedback UI',
  textColor:"#ff6a95",
  bgColor:'rgba(0,0,0,0.4)',

}
Header.protoTypes ={
  text: PropTypes.string.isRequired,
  textColor:PropTypes.string,
  bgColor:PropTypes.string
}

export default Header