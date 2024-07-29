import React, { useEffect, useState } from 'react';
import { FaVolumeUp, FaVolumeMute, FaDove, FaRing } from 'react-icons/fa';
import $ from 'jquery';
import { useParams } from 'react-router-dom';



const LockScreenComponent = ({ onOpen }) => {

  const [isVisible, setIsVisible] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const handleOpenClick = () => {
      $('#lockscreen').fadeOut(() => {
        setIsVisible(false);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        onOpen();
      });
    };

    $('#open').on('click', handleOpenClick);

    // Cleanup the event listener on component unmount
    return () => {
      $('#open').off('click', handleOpenClick);
    };
  }, [onOpen]);


  return (
    <section id="lockscreen" style={{ display: isVisible ? 'block' : 'none' }}>
      <div className="row h-100 text-light">
        <div className="col-12 text-center d-flex">
          <div className="m-auto">
            <h1 className="my-0 py-0 mb-4">
              <FaDove data-aos="fade-up" />
              <FaRing className="mx-2" data-aos="fade-up" />
              <FaDove className="fa-flip-horizontal" data-aos="fade-up" />
            </h1>

            <p className=''>
              Wedding Invitation
            </p>
            <h1 className="text-title" data-aos="fade-in" data-aos-delay="1000">
              Dicky & Indah
            </h1>
            <div className='mb-4' data-aos="fade-in" data-aos-delay="2000">
              <p>Kepada</p>
              <p>Bapak/Ibu {name ? name : 'Tamu'} </p>
              <small>Tanpa mengurangi rasa hormat, Kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.</small>
            </div>

            <button
              id="open"
              className="btn btn-lg btn-light py-3 px-5"
              data-aos="fade-in"
              data-aos-delay="3000"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LockScreenComponent;
