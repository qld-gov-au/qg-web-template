// All the environment related SWE3 code

window.qg = window.qg || {};
window.qg.swe = window.qg.swe || {};
window.qg.cdn = window.qg.swe.isProduction === false ? 'https://beta-static.qgov.net.au' : 'https://static.qgov.net.au';
window.qg.swe.assets = '/assets/v3.1/latest/';
window.qg.googleKey = window.location.hostname.search(/\bdev\b|\btest\b|\blocalhost\b|\buat\b/) !== -1 ? 'AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE' : 'AIzaSyAqkq7IK18bsh-TUMmNR-x9v9PsptT3LMY';
window.qg.googleRecaptchaApiKey = window.location.hostname.search(/\bdev\b|\btest\b|\blocalhost\b|\buat\b/) !== -1 ? '6LeNGSwUAAAAAD6o-P5UTM0FNpKjYB71Kh70F-Ud' : '6LcoIywUAAAAAN-1rq22G-bP3yxl1bBq_5nHJ6s9';

window.qg.swe.paths = {
  images: window.qg.swe.assets + 'images',
};
