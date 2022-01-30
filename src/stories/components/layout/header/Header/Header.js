import MobileMenuButton from '../MobileMenuButton/MobileMenuButton.html';
import CoatOfArm from '../CoatOfArm/CoatOfArm.html';
import SiteSearch from '../SiteSearch/SiteSearch';
import PortalLinks from '../PortalLinks/PortalLinks.html';
import SiteNav from '../SiteNav/SiteNav.html';
import HeaderLocation from '../HeaderLocation/HeaderLocation';

const template = `<header id="qg-site-header" class="qg-site-header sticky">
  <div class="container-fluid qg-site-width qg-site-header-top">
    <div class="row align-items-center justify-content-between">
      ${MobileMenuButton}
      ${CoatOfArm}
      ${SiteSearch}
    </div>
  </div>
  ${PortalLinks}
  <div class="container-fluid qg-site-width qg-site-header-bottom">
    <div class="row align-items-center justify-content-between">
      ${SiteNav}
      ${HeaderLocation}
    </div>
  </div>
</header>`
;

export default template;
