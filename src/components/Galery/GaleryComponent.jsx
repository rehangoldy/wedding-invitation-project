import React from 'react'
import CarouselImg1 from '../../assets/Images/carousel-1.jpeg';
import CarouselImg2 from '../../assets/Images/carousel-2.jpeg';
import CarouselImg3 from '../../assets/Images/carousel-3.jpeg';
import CarouselImg5 from '../../assets/Images/carousel-5.jpeg';
import CarouselImg6 from '../../assets/Images/carousel-6.jpeg';
import FrameFlowerTop from '../../assets/Images/frame-flower-top.png'

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { FaCamera, FaFeather } from 'react-icons/fa';

const GaleryComponent = () => {

  useEffect(() => {
    // Inisialisasi Swiper
    const swiper = new Swiper('.swiper', {
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

  }, []);
  return (
    <div>
      <div className='mt-4' data-aos='zoom-out-up'>
        <img src={FrameFlowerTop} className='flower-frame' alt="" />
      </div>

      <section id="gallery">
        <h1 className="display-4 text-center" data-aos="slide-right">
          <FaCamera />
          <br />
          Galeri
        </h1>
        <div className="container" data-aos='fade-up'>
          {/* Slider main container */}
          <div className="swiper">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide d-flex">
                <img className="carousel m-auto" src={CarouselImg1} alt="gallery-1" />
              </div>
              <div className="swiper-slide d-flex">
                <img className="carousel m-auto" src={CarouselImg2} alt="gallery-2" />
              </div>
              <div className="swiper-slide d-flex">
                <img className="carousel m-auto" src={CarouselImg3} alt="gallery-3" />
              </div>
              <div className="swiper-slide d-flex">
                <img className="carousel m-auto" src={CarouselImg5} alt="gallery-5" />
              </div>
              <div className="swiper-slide d-flex">
                <img className="carousel m-auto" src={CarouselImg6} alt="gallery-6" />
              </div>
            </div>
            {/* If we need navigation buttons */}
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
          </div>
          <hr className="my-5 text-secondary" />
          <h1 className="display-4 text-center" data-aos="slide-right">
            <FaFeather className="fa-flip-horizontal" />
            <br />
          </h1>
          <p className="fs-2 text-end" data-aos="fade-in">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            <span className="mx-2"> ۗ</span>
            اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p className="lh-lg mt-4" data-aos="fade-in">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
            yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <span className="text-secondary" data-aos="fade-in">- QS. Ar-Rum Ayat 21</span>
        </div>

      </section>

    </div>
  )
}

export default GaleryComponent
