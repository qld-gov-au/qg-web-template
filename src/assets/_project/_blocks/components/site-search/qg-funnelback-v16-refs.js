(function() {
  const replacements = [
    ['find.search.qld.gov.au', 'discover.search.qld.gov.au'],
    ['qld-gov', 'qgov~sp-search'],
    ['qgov-content', 'qgov~sp-content'],
    ['services-web', 'qgov~sp-services'],
  ];

  function updateRefs(originalValue) {
    let newValue = originalValue;
    replacements.forEach(pair => {
      newValue = newValue.replace(new RegExp(pair[0], 'g'), pair[1]);
    });
    return newValue;
  }

  document.querySelectorAll('form[data-suggestions], form[data-results-url], div[data-centres], input[name=collection]').forEach(element => {
    if (element.hasAttribute('data-suggestions')) {
      const currentValue = element.getAttribute('data-suggestions');
      element.setAttribute('data-suggestions', updateRefs(currentValue));
    }
    if (element.hasAttribute('data-results-url')) {
      const currentValue = element.getAttribute('data-results-url');
      element.setAttribute('data-results-url', updateRefs(currentValue));
    }
    if (element.hasAttribute('data-centres')) {
      const currentValue = element.getAttribute('data-centres');
      element.setAttribute('data-centres', updateRefs(currentValue));
    }
    if (element.getAttribute('name') === 'collection') {
      const currentValue = element.getAttribute('value');
      element.setAttribute('value', updateRefs(currentValue));
    }
  });
})();
