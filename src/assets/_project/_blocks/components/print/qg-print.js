/*
FAQ -
Q1 Where this class in use and what it do ?
A1 Print button in the content section and the guide pages, there is an option in the Matrix Metadata to enable this on a page. Functions are triggered if a particular ID and a class is present on a page.
Example - https://www.qld.gov.au/recreation/activities/areas-facilities/centres/sunshine-coast-recreation-centre
 */

export class QgPrint {
  constructor () {
    this.$pageLinks = $('#toc.qg-print-guide ol li a');
    this.$contentContainer = $('#qg-content');
    this.$printContentLink = $('.print-content-link');
    this.$printguideLink = $('#printguide');
    this.$content = this.$contentContainer.find('#qg-primary-content');
    this.new_content = '';
    this.current_content = '';

    if (this.$printguideLink.length > 0 || this.$printContentLink.length > 0){
      this.onClickContentBtn();
      this.onClickGuidePageBtn();
    }
  }

  /**
  * onClickContent function register a event to print content using a button with the 'print-content-link' class
  * @return {undefined}
  **/
  onClickContentBtn() {
    let self = this;
    if (self.$printContentLink.length > 0) {
      self.$printContentLink.on('click', function (e) {
        e.preventDefault();
        window.print();
      });
    }
  }

  /**
   onClickGuidePageBtn function register a event to print guide page content using a button with the 'printguide' id.
  * @return {undefined}
  **/
  onClickGuidePageBtn () {
    let self = this;
    let numImagesLoaded = 0;

    // store content present inside the 'qg-primary-content' container
    self.current_content = self.$content.html();

    // attach a event on the print guide link/button
    $('body').on('click', '#printguide', function(event) {
      event.preventDefault();
      var pageList = [];
      // grab all the links in the guide page list
      pageList = self.$pageLinks.map(function() {
        return this.href;
      }).get();
      // grab the content using Ajax of all the links
      $.each(pageList, function (index, pageContent) {
        self.getRemotePages(pageContent);
      });
      // replace the content in the current content with the ajax fetched content
      self.$content.append(self.new_content);
      // check all images are there on the page or not (large images takes more time to load also depends on the network connection speed)
      const imageList = self.$content.find('img');
      let totalImages = imageList.length;
      // filter out the content and make it ready for print
      self.$content.find('h1').not(':first').remove();
      self.$content.find('.qg-print-guide p:contains("In this guide")').parent().remove();
      self.$content.find('ul.pagination').remove();
      self.$content.find('.qg-content-footer').remove();
      if (totalImages === 0){
        window.print();
        self.$content.empty().append(self.current_content);
      } else {
        imageList.map(function() {
          let tempSrc =  this.src;
          this.onload = function () {
            numImagesLoaded++;
            if (numImagesLoaded >= totalImages) {
              window.print(); // if all images loaded then print the page
              self.$content.empty().append(self.current_content);
            }
          };
          this.src = tempSrc;
        });
      }
    });
  }

  /**
   * getRemotePages -> clicking quick exit button a page
   * @param {string} pageContent - site to replace on initiating the 'quick exit' ('Esc' key or clicking 'Close this site' button) function
   * @return {undefined}
   **/
  getRemotePages (pageContent) {
    let self = this;
    $.ajax({
      url: pageContent,
      data: {},
      success: function (data) {
        // Add the content and asides divs of each page to what will be printed
        self.new_content += '<div id="qg-primary-content" class="d-none d-print-block">' + $(data).find('#qg-primary-content').html() + '</div>';
        self.new_content += '<hr />';
      },
      dataType: 'html',
      async: false,
    });
  }
}
