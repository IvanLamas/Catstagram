import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';
const footerStyle ={
  "position": "fixed",
  "left": "0",
  "bottom": "0",
  "width": "100%",
  "borderBottom": "4px solid #000",
  "backgroundColor": "#B84C34",
  "padding": "5px",
  "color": "#eff1e4",
  "textAlign": "center",
}
export default class Footer extends Component {
  render() {
    return (
      <div style={footerStyle}>
        Hecho con <FontAwesomeIcon icon={faLaughBeam} size={"lg"} color={"#ffffff"}/> por Iván Yllescas Lamas.
      </div>
    )
  }
}
