/*
see: http://stackoverflow.com/questions/12448134/social-share-links-with-custom-icons
http://www.facebook.com/share.php?u=${from}&title=${title}
http://twitter.com/home?status=${title}+${from}
http://www.linkedin.com/shareArticle?mini=true&url=${from}&title=${title}&source=[SOURCE/DOMAIN]

        <h2>Share:</h2>
        <ul>
            <li>
                <a class="qg-share-link" href="https://www.qld.gov.au/share/?via=facebook&amp;title=PAGE_TITLE&amp;url=PAGE_URL" title="Facebook"><span class="fa fa-facebook fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Facebook</span></a>
            </li>
            <li>
                <a class="qg-share-link" href="https://www.qld.gov.au/share/?via=twitter&amp;title=PAGE_TITLE&amp;url=PAGE_URL" title="Twitter"><span class="fa fa-twitter fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Twitter</span></a>
            </li>
            <li>
                <a class="qg-share-link" href="https://www.qld.gov.au/share/?via=linkedin&amp;title=PAGE_TITLE&amp;url=PAGE_URL" title="LinkedIn"><span class="fa fa-linkedin fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Linkdin</span></a>
            </li>
            <li>
                <a class="qg-share-link" href="https://www.qld.gov.au/share/?title=PAGE_TITLE&amp;url=PAGE_URL" title="share"><span class="fa fa-share-alt fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Share</span></a>
            </li>
        </ul>
*/


function getLink (to, args, type, icon = 'default') {
	var from = args.from;
	var title = encodeURIComponent(args.title);
	var domain = args.domain;
	var description = encodeURIComponent(args.description);

	var url = '';
	var iconStr = '';
	var iconSel = '';
	var hidden = '';
	var who = to.toLowerCase();
	switch(who) {
		case 'facebook':
			url = `http://www.facebook.com/share.php?u=${from}&title=${title}`; break;
		case 'twitter':
			url = `http://twitter.com/home?status=${title}+${from}`; break;
		case 'linkedin':
			url = `http://www.linkedin.com/shareArticle?mini=true&url=${from}&title=${title}&source=${domain}`; break;
		case 'delicious':
			url = `http://del.icio.us/post?url=${from}&title=${title}]&notes=${description}`; break;
		case 'digg':
			url = `http://www.digg.com/submit?phase=2&url=${from}&title=${title}`; break;
		case 'evernote':
			url = `http://www.evernote.com/clip.action?url=${from}&title=${title}`; break;
		case 'reddit':
			url = `http://www.reddit.com/submit?url=${from}&title=${title}`; break;
		case 'stumbleupon':
			url = `http://www.stumbleupon.com/submit?url=${from}&title=${title}`; break;
		case 'tumblr':
			// url = `http://www.tumblr.com/share?v=3&posttype=link&content=${from}&title=${title}&caption=${description}`; break;
			url = `https://www.tumblr.com/widgets/share/tool?posttype=link&content=${from}&title=${title}&caption=${description}`; break;
		case 'google+':
			url = `https://plus.google.com/share?url=${from}`; break;
	}
	if(type === 'main') {
		hidden = 'qg-visually-hidden';
	}
	if(icon === 'default') {
		iconSel = who;
	} else {
		iconSel = icon;
	}
	if(icon !== false) {
		iconStr = `<span class="fa fa-${iconSel} fa-2x" aria-hidden="true"></span>`;
	}
	return `<a class="qg-share-link qg-accessibility-off" href="${url}" title="${to}">${iconStr}<span class="title ${hidden}"">${to}</span></a>`;
}

function init () {
	var $target = $('#qg-share');
	var args = {
		from: window.location.href,
		domain: window.location.hostname,
		title: $(document).find('title').text(),
		description: $('meta[name="DCTERMS.description"]').attr('content'),
	};
	var template = `<h2>Share:</h2>
<ul class="navbar-right">
    <li>${getLink('Facebook', args, 'main')}</li>
    <li>${getLink('Twitter', args, 'main')}</li>
    <li>${getLink('LinkedIn', args, 'main')}</li>
    <li class="dropdown">
        <button id="shareDropdown" class="qg-share-link" title="share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        	<span class="fa fa-share-alt fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Share</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="shareDropdown">
        	<li>${getLink('Delicious',		args, 'sub')}</li>
        	<li>${getLink('Digg',			args, 'sub')}</li>
        	<li>${getLink('Evernote',		args, 'sub', false)}</li>
        	<li>${getLink('Reddit',			args, 'sub')}</li>
        	<li>${getLink('StumbleUpon', 	args, 'sub')}</li>
        	<li>${getLink('Tumblr',			args, 'sub')}</li>
        	<li>${getLink('Google+',		args, 'sub', 'google-plus')}</li>
        </ul>
    </li>
</ul>`;
	$target.html(template);
}
module.exports = {
	init: init
};


/*
 <button class="qg-share-link" href="https://www.qld.gov.au/share/?title=PAGE_TITLE&amp;url=PAGE_URL" title="share"><span class="fa fa-share-alt fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Share</span></a>
    </l
// old code for reference
function init () {
    var pageUrl = window.location.href;
    var links = $('.qg-share-link');
    var pageTitle = $(document).find('title').text();
    links.each(function (index, link) {
        link.href = link.href.replace('PAGE_TITLE', pageTitle);
        link.href = link.href.replace('PAGE_URL', encodeURIComponent(pageUrl));
    });
}
module.exports = {
    init: init
};
*/
