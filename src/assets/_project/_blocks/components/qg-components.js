import './social-media/qg-social-media';
import './misc/qg-progressive-reveal';
import './misc/qg-header';
import '../layout/location/qg-location';
import './misc/qg-license';
import './carousel/qg-carousel';
import { QgQuickExit } from './quick-exit/qg-quick-exit';
import { QgPrint } from './print/qg-print';
import { QgAccordion } from './accordion/qg-accordion';
import { QgAddressAutocomplete } from './forms/qg-address-autocomplete';
import { QgSearchMinimize } from './site-search/qg-search-minimize';
import './tables';
import './forms/qg-recaptcha';
import './forms/qg-forms';
import './misc/qg-document-links';
import './gallery/qg-gallery';
import './opengraph/qg-opengraph';
import './site-search/qg-site-search';

import accessibility      from './accessibility/qg-accessibility';
accessibility.init();

// QG quick exit
const quickExit = new QgQuickExit();
quickExit.init();

// QG autocomplete
// eslint-disable-next-line no-unused-vars
const qgAddressAutocomplete = new QgAddressAutocomplete();

// QG print
// eslint-disable-next-line no-unused-vars
const qgPrint = new QgPrint();

// QG accordion
// eslint-disable-next-line no-unused-vars
const qgAccordion = new QgAccordion();

// QG Search minimize
// check and initialize class if required
if (document.querySelector('.qg-site-search__multiple-forms')) {
  const qgSearchMinimize = new QgSearchMinimize();
  qgSearchMinimize.init();
}
