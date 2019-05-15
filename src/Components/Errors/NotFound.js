import React from 'react'
import '../Breeds/Breeds.css'

export default function NotFound() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <h1>Error 404</h1>
        <h1>Página no encontrada</h1>
        <a href="/" className="btn mybtn">
          <span><i className="fa fa-arrow-left" aria-hidden="true"></i> Regresar al inicio</span>
        </a>
      </div>
    </div>
  )
}
