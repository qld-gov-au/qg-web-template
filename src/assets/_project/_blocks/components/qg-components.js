import './social-media/qg-social-media';
import './misc/qg-progressive-reveal';
import './misc/qg-header';
import '../layout/location/qg-location';
import './misc/qg-license';
import './carousel/qg-carousel';
import { QgQuickExit } from './quick-exit/qg-quick-exit';
import './tables';
import './accordion/qg-accordion';
import './forms/qg-recaptcha';
import './forms/qg-address-autocomplete';
import './forms/qg-forms';
import './misc/qg-document-links';
import './gallery/qg-gallery';
import './opengraph/qg-opengraph';
import './site-search/qg-site-search';

import accessibility      from './accessibility/qg-accessibility';
accessibility.init();

// quick exit
const quickExit = new QgQuickExit();
quickExit.init();
