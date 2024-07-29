import React from 'react'
import FotoBerdua from '../../assets/Images/foto-berdua.png'


const WeddingPrayerComponent = () => {
  return (
    <div className='weddig-prayer-component'>
      <section id="endsection" className="text-light pt-5" >
        <div className="container text-center">
          <p className="fw-bold">Atas Doa & Restu dari Bapak/Ibu/Saudara/i<br />Kami Ucapkan Banyak Terima Kasih</p>
          <br />
          <p className="fw-bold">Kami yang Berbahagia,</p>
          <h1 className="display-3">Dicky & Indah</h1>
          <div className='d-flex align-item-center justify-content-center mb-2 '>
            <img className='rounded-circle' data-aos='fade-up' style={{ width: 300, height: 300 }} src={FotoBerdua} alt="" />
          </div>
          <p>Dicky & Indah | Undangan Pernikahan</p>
          <hr className="text-light mt-5" />
          <div className="pb-3 text-center">
            <small className="text-light">RGA Project &copy; 2024 by <a className="text-light" href="https://www.instagram.com/rehangoldy/" rel="noopener noreferrer">Raihan Goldy Azzalli</a></small>
          </div>
        </div>
      </section>

    </div>
  )
}

export default WeddingPrayerComponent
