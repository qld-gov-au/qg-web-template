/**
* Function for rendering social media links on CUE compliant sites
*
* Requires:
* - JQuery
**/

/**
* #####################################
* Model
**/

function returnSocialLinks () {
  return {
    primary: [
      {title: 'Facebook',   showTitle: false, icon: renderIcon('fa', 'facebook')},
      {title: 'Twitter',    showTitle: false, icon: renderIcon('fa', 'twitter')},
      {title: 'LinkedIn',   showTitle: false, icon: renderIcon('fa', 'linkedin')},
    ],
    secondary: [
      // {title: 'Delicious',    showTitle: true, icon: renderIcon('fa', 'delicious')},
      {title: 'Digg',         showTitle: true, icon: renderIcon('fa', 'digg')},
      // {title: 'Evernote',     showTitle: true, icon: renderIcon('svg', 'evernote', '/assets/v3/images/evernote-logo-white.svg')},
      // {title: 'Reddit',       showTitle: true, icon: renderIcon('fa', 'reddit')},
      // {title: 'StumbleUpon',  showTitle: true, icon: renderIcon('fa', 'stumbleupon')},
      // {title: 'Tumblr',       showTitle: true, icon: renderIcon('fa', 'tumblr')},
      {title: 'Google+',      showTitle: true, icon: renderIcon('fa', 'google-plus')},
    ]
  };
}

/**
* #####################################
* Views
**/

function renderSocialURL (who, from, title, domain, description) {
  switch(who) {
    case 'facebook':
      return `http://www.facebook.com/share.php?u=${from}&title=${title}`; break;
    case 'twitter':
      return `http://twitter.com/home?status=${title}+${from}`; break;
    case 'linkedin':
      return `http://www.linkedin.com/shareArticle?mini=true&url=${from}&title=${title}&source=${domain}`; break;
    case 'delicious':
      return `http://del.icio.us/post?url=${from}&title=${title}]&notes=${description}`; break;
    case 'digg':
      return `http://www.digg.com/submit?phase=2&url=${from}&title=${title}`; break;
    case 'evernote':
      return `http://www.evernote.com/clip.action?url=${from}&title=${title}`; break;
    case 'reddit':
      return `http://www.reddit.com/submit?url=${from}&title=${title}`; break;
    case 'stumbleupon':
      return `http://www.stumbleupon.com/submit?url=${from}&title=${title}`; break;
    case 'tumblr':
      return `https://www.tumblr.com/widgets/share/tool?posttype=link&content=${from}&title=${title}&caption=${description}`; break;
    case 'google+':
      return `https://plus.google.com/share?url=${from}`; break;
  }
  return false;
}

function renderIcon (type, name, src = false) {
  switch(type) {
    case 'fa':
      return `<span class="fa fa-${name} fa-2x qg-share-icon" aria-hidden="true"></span>`; break;
    case 'svg':
      return `<img src="${src}" aria-hidden="true" class="qg-share-icon" alt="name" />`; break;
  }
  // Default, return nothing
  return '';
}

function renderHidden () {
  return 'qg-visually-hidden';
}

function renderLink (url, title, icon, hidden = '') {
  return `<li>
<a class="qg-share-link qg-accessibility-off" href="${url}" title="${title}">${icon}<span class="title ${hidden}"">${title}</span></a>
</li>`;
}

function renderShareButtons () {
  return `<h2>Share:</h2>
<ul class="navbar navbar-right">
  ${getLinks('primary')}
  <li class="dropdown">
    <button id="shareDropdown" class="qg-share-link" title="share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="fa fa-share-alt fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Share</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="shareDropdown">
      ${getLinks('secondary')}
    </ul>
  </li>
</ul>`;
}

/**
* #####################################
* Controller
**/

function getLinks (type) {
  // Get link list
  const socialLinks = returnSocialLinks();
  // Get page data
  const from = window.location.href;
  const domain = window.location.hostname;
  const title = $(document).find('title').text();
  const description = $('meta[name="DCTERMS.description"]').attr('content');

  // Iterate
  let str = '';
  for(let prop in socialLinks[type]) {
    let entry = socialLinks[type][prop];
    let url = renderSocialURL(entry.title.toLowerCase(), from, entry.title, domain, description);
    let hidden = '';
    if(entry.showTitle !== true) {
      hidden = renderHidden();
    }
    str = str + renderLink(url, entry.title, entry.icon, hidden);
  }
  return str;
}

function init () {
  const $target = $('#qg-share');
  $target.html(renderShareButtons());
}

module.exports = {
  init: init
};
