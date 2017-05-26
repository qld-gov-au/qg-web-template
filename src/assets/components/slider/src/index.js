//plugin
import './lib/unslider/unslider-min';
import './lib/unslider/unslider.css';

//slider custom styling
import './styles/slider.scss';

// init code
/*globals qg*/
$(function ($, qg) {
  $('.banner').unslider().show();
  qg.comp.processXML('inside slider file');
}(jQuery, qg));
