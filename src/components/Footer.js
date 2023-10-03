import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='container-fluid bg-dark  pt-3' style={{marginTop:'180px'}}>
      <div className='row'>
          <div className='col col-12 col-sm-3 col-md-3 col-lg-3 text-light mx-auto'>
              <h5>&#169; Copyright {year} </h5>
          </div>
          </div>
      </div>
  
  )
}

export default Footer