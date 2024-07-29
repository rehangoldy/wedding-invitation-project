import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/Style/global.css';
import '../../assets/Style/normalize.css';
// import '../../assets/Style/undangan.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeadComponent from '../Head/HeadComponent';
import EventDetailComponent from '../Body/EventDetailComponent';
import GaleryComponent from '../Galery/GaleryComponent';
import WeddingPrayerComponent from '../WeddingPrayer/WeddingPrayerComponent';
import GiveComponent from '../GiveComponents/GiveComponent';
import OpeningComponent from '../Opening/OpeningComponent';
import LockScreenComponent from '../LockScreen/LockScreenComponent';
import OpeningSlider from '../OpeningSlider/OpeningSlider';
import BgBerdua from '../../assets/Images/crop-removebg-preview.png'
import { Howl } from 'howler';

const HomeComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const initSound = () => {
    const newSound = new Howl({
      src: ['audio2.mp3'],
      loop: true,
      onplayerror: function () {
        newSound.once('unlock', function () {
          newSound.play();
        });
      }
    });

    setSound(newSound);
    return newSound;
  };

  const toggleMusic = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLockScreenClick = () => {
    const newSound = initSound();
    newSound.play();
    setIsPlaying(true);
  };

  return (
    <div className='home-component' >
      {/* <LockScreenComponent onOpen={handleLockScreenClick} /> */}
      <button className="music-button shadow-lg" title="Hidup/Matikan Musik" onClick={toggleMusic}>
        <i id="iconMusic" className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-volume-mute'} text-light fa-fw`}></i>
      </button>
      <OpeningSlider/>
      <OpeningComponent />
      <HeadComponent />
      <EventDetailComponent />
      {/* <GaleryComponent /> */}
      <GiveComponent />
      <WeddingPrayerComponent />
    </div>
  );
};

export default HomeComponent;
