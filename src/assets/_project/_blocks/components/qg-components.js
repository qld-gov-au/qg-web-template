import './social-media/qg-social-media';
import './progressive-reveal';
import './qg-header';
import '../layout/location/qg-location';
import './license';
import './carousel/carousel';
import { QgQuickExit } from './quick-exit/quick-exit';
import './tables/index.js';
import './accordion/accordion';
import './forms/qg-recaptcha';
import './forms/qg-address-autocomplete';
import './forms/qg-forms';
import './qg-document-links';
import './gallery/qg-gallery';
import './opengraph/opengraph';
import '../layout/site-search/qg-site-search';

import accessibility      from './accessibility/accessibility';
accessibility.init();

// quick exit
const quickExit = new QgQuickExit();
quickExit.init();
