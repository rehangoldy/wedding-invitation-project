import React from 'react'
import BismillahImg from '../../assets/Images/bismillah.png'
import FrameFlowerTop from '../../assets/Images/frame-flower-top.png'
import FrameFlowerBot from '../../assets/Images/frame-flower-bot.png'



const HeadComponent = () => {
  return (
    <div className='head-component mt-4 mb-4'>
      <div data-aos='zoom-out-up'>
        <img className='flower-frame' src={FrameFlowerTop} alt="" style={{ width: '100%' }} />
      </div>
      <section id="head" className="d-flex">
        <div className="m-auto px-2">
          <img className="body-head" src={BismillahImg} alt="Bismillahirrohmanirrohim" data-aos="fade-in" />
          <div className="text-center">
            <h1 className="display-4" data-aos="fade-in">Assalamu'alaikum Wr. Wb.</h1>
            <p data-aos="fade-in">
              Dengan rahmat dan ridho Allah SWT <br />
              InshaAllah kami akan menyelenggarakan pernikahan putra putri kami: <br />
            </p>
            <div className="my-5">
              <h1 className="display-5 my-2" data-aos="fade-in">Dicky Dermawan</h1>
              <p data-aos="fade-in">
                Anak pertama dari Bapak Irwan Syahputra dan Ibu Juliani<br />
              </p>
              <h1 className="fw-bold" data-aos="fade-in">&</h1>
              <h1 className="display-5 my-2" data-aos="fade-in">Indah Lesatari</h1>
              <p data-aos="fade-in">
                Anak tunggal dari dari Alm Bapak Abdul Hadi dan Ibu Ridawati<br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div data-aos='zoom-out-up'>
        <img className='flower-frame' src={FrameFlowerBot} alt="" style={{ width: '100%' }} />
      </div>
    </div>
  )
}

export default HeadComponent
