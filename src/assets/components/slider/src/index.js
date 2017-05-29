//test plugins
import '/home/aminaz/Desktop/github/glue-template/src/assets/components/misc/src/qg-xml-reader.js';

//plugin
import './lib/unslider/unslider-min';
import './lib/unslider/unslider.css';

//slider custom styling
import './styles/slider.scss';

/*globals qg*/
/*globals Mustache*/
$(function ($, qg, Mustache) {
  var customTags = [ '[[', ']]' ];
  $.get('assets/templates/featured.html', function (templates) {
    var template = $(templates).filter('#featured-slider').html();
    Mustache.parse(template, customTags);

    qg.component.processXML('assets/data/featured/source.atom', 'GET').then(function (result) {


      var data = $(result).find('entry').map(function (x) {

        var $this = $(this);
        var entries = {
          title: $this.find('title').text(),
          imgSrc: $this.find('summary').find('div').find('img').attr('src'),
          desc: $this.find('summary').find('p').text(),
          posted: $this.find('updated').text(),
          url: $this.find('id').eq(0).text(),
        };
        return entries;
      });

      console.log(data);


      var rendered = Mustache.render(template, data);
      $('qg-slider').html(rendered);
      $('.banner').unslider();
    }, function (reason) {
      console.log('error in processing your request', reason);
    });
  });
}(jQuery, qg, Mustache));

