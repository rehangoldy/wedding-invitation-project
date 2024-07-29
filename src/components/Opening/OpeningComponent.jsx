import React from 'react'
import BgBerdua from '../../assets/Images/crop-removebg-preview.png'

const OpeningComponent = () => {
  return (
    <div className='opening-component'>
       <section id="home" data-aos="fade-out">
        <div className="d-flex h-100">
          <div className="m-auto text-center text-white">
          <h1 className='display-3'>The Wedding</h1>
            <div className='text-center'>
              <img className='rounded-circle' style={{ width: 200, }} src={BgBerdua} alt="" />
            </div>
            <h1 className="display-1 my-2">Dicky & Indah</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpeningComponent
