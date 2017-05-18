//plugin
import './node_modules/slick-carousel/slick/slick.min.js';
import './node_modules/slick-carousel/slick/slick.css';

import './images/by-80x15.png';

//slider custom styling
import './styles/slider.scss';


$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

