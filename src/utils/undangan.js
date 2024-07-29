// Audio
// var myAudio = document.getElementById("musicToggle");
var isPlaying = false;

function toggleMusic() {
  let icon = document.getElementById('iconMusic');
  if (isPlaying) {
    sound.pause();
    icon.classList.add("fa-volume-mute");
    icon.classList.remove("fa-volume-up");
    isPlaying = false;
  } else {
    sound.play();
    icon.classList.add("fa-volume-up");
    icon.classList.remove("fa-volume-mute");
    isPlaying = true;
  }
};

// Howler
Howler.autoUnlock = false;

var sound = new Howl({
  src: ['public/audio.mp3'],
  onplayerror: function() {
    sound.once('unlock', function() {
      sound.play();
    });
  },
  // autoplay: true,
  loop: true,
});

// sound.play();

document.getElementById("to").innerHTML = getParameterByName("to");

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Countdown
// Set the date we're counting down to
var countDownDate = new Date("Oct 29, 2021 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("i").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = `
    <h1 class="mt-5 display-6">Terimakasih telah menjadi bagian dari hari istimewa kami</h1>
    `;
  }
}, 1000);

// SwiperJS
const swiper = new Swiper('.swiper', {
  speed: 600,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
