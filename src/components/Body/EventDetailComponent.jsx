import React from 'react'
import FrameFlowerWhiteTop from '../../assets/Images/frame-flower-white-top.png'
import FrameFlowerWhiteBot from '../../assets/Images/frame-flower-white-bot.png'


const EventDetailComponent = () => {

  const CountDownDate = new Date("Oct 29, 2024 08:00:00").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = CountDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60 * 25)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = hours;
    document.getElementById("m").innerHTML = minutes;
    document.getElementById("i").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('countdown').innerHTML =
        `<h1 class="mt-5 display-6">Terimakasih telah menjadi bagian dari hari istimewa kami</h1> `;
    }

  }, 1000)

  return (
    <div className='event-detail-component mt-4'>
      <section id="body" >
        <div className="container mt-4 ">
          <div className="text-center text-light">
            <h1 className="display-4" data-aos="slide-right"><i className="far fa-rings-wedding" style={{marginTop: 30}}></i><br />Detail Acara</h1>
            <div className="row px-3 justify-content-center">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="card shadow card-acara p-2 mb-4" data-aos="slide-up">
                  <div className="card-body text-body">
                    <h2>Akad Nikah</h2>
                    <i className="fas fa-calendar-day fa-2x mb-3"></i>
                    <p>Jum'at, 29 Oktober 2021</p>
                    <hr />
                    <p>Pukul 08:00 WIB</p>
                    <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                    <p>Kediaman Mempelai Wanita</p>
                    <hr />
                    <p> Rintis IX Balimbingan Tanah Jawa kab. Simalungun</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className="card shadow card-acara p-2 mb-4" data-aos="slide-up" data-aos-delay="400">
                  <div className="card-body text-body">
                    <h2>Resepsi</h2>
                    <i className="fas fa-calendar-day fa-2x mb-3"></i>
                    <p>Minggu, 31 Oktober 2021</p>
                    <hr />
                    <p>08:00 s/d 12:00 WIB</p>
                    <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                    <p>Kediaman Mempelai Wanita</p>
                    <hr />
                    <p> Rintis IX Balimbingan Tanah Jawa kab. Simalungun</p>

                  </div>
                </div>
              </div>
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
              </div>
            </div>
          </div>
          <hr className="my-5 text-secondary" />
          <div className="text-center text-light">
            <h1 className="display-4" data-aos="slide-right"><i className="far fa-map"></i><br />Lokasi Acara</h1>
            {/* Embed Google Maps */}
            <div className="mapouter" data-aos="slide-up">
              <div className="gmap_canvas">
                <iframe id="gmap_canvas" title='google-maps' src="https://maps.google.com/maps?q=-7.219552%20110.378417&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><br />
              </div>
            </div>
            {/* <!-- End of Google Maps --> */}
            <a href="https://goo.gl/maps/aR87QjziknD68nVJ9" className="btn btn-outline-light py-3 px-4 my-4" target="_blank" rel="noreferrer" data-aos="fade-in">Buka di Google Maps <i className="fas fa-map-marker-alt fa-fw fa-lg"></i></a>
          </div>
        </div>
       
      </section>
     
    </div>
  )
}

export default EventDetailComponent
