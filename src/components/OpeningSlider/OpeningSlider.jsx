import React from 'react'
import './OpeningSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

import CarouselImg1 from '../../assets/Images/carousel-1.jpeg';
import CarouselImg2 from '../../assets/Images/carousel-2.jpeg';
import CarouselImg3 from '../../assets/Images/carousel-3.jpeg';
import CarouselImg5 from '../../assets/Images/carousel-5.jpeg';
import CarouselImg6 from '../../assets/Images/carousel-6.jpeg';


const OpeningSlider = () => {

    const createGoogleCalendarURL = (event) => {
        const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
        const title = encodeURIComponent('Dicky & Indah Wedding');
        const description = encodeURIComponent('Join us in celebrating the wedding of Dicky and Indah.');
        const location = encodeURIComponent('Location of the event');
        const startDate = '20240730T100000Z'; // Format: YYYYMMDDTHHmmssZ
        const endDate = '20240730T120000Z'; // Format: YYYYMMDDTHHmmssZ

        return `${baseUrl}&text=${title}&dates=${startDate}/${endDate}&details=${description}&location=${location}`;
    };

    return (
        <div className='opening-slider-component'>
            <div className="background-swiper">
                <Swiper
                    spaceBetween={30}
                    effect="fade"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='img-carousel' src={CarouselImg1} alt="nature-1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CarouselImg2} alt="nature-2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CarouselImg3} alt="nature-3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CarouselImg5} alt="nature-3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CarouselImg6} alt="nature-3" />
                    </SwiperSlide>
                </Swiper>
                <div className="content-overlay">
                    <p className=''>The wedding of</p>
                    <p className='fw-bold ' style={{ fontSize: 50 }}>Dicky</p>
                    <p className=''>&</p>
                    <p className='fw-bold ' style={{ fontSize: 50 }}>Indah</p>
                    <div id="countdown" className="col-12 mt-2" data-aos="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-lg-1 col-3 fs-1" id="d">00</div>
                            <div className="col-lg-1 col-3 fs-1" id="h">00</div>
                            <div className="col-lg-1 col-3 fs-1" id="m">00</div>
                            <div className="col-lg-1 col-3 fs-1" id="i">00</div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-1 col-3 fs-6">Hari</div>
                            <div className="col-lg-1 col-3 fs-6">Jam</div>
                            <div className="col-lg-1 col-3 fs-6">Menit</div>
                            <div className="col-lg-1 col-3 fs-6">Detik</div>
                        </div>
                        <p className="mt-4 fs-4">Menuju Hari Istimewa Kami</p>

                        <button className='btn-add-calendar'>
                            <a href={createGoogleCalendarURL()} className="btn2" target="_blank" rel="noopener noreferrer">
                                <span className="spn2">Add to calendar</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpeningSlider
