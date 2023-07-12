// This function looks for file summary strings on a page and reformats values for consistency and readability.
// It is an update a previous SWE function with the same behaviour.
// It has been converted from jQuery to vanilla JS and it now rounds up filesize values. The previous function stripped all values after the decimal point.

// 1. looks for this file summary pattern: for example "(PDF, 1.3 MB) or (DOCX 23.5KB)" on all links (A tags) in the DOM
// 2. checks the HREF of the link ends in .PDF, .RTF etc
// 3. reformats the file summary for consistency (PDF 517 KB)
// 4. Rounds UP the file size value to the nearest whole integer
// 5. Assumes a bias for over inflated sizes. e.g. 1.3 MB will round up to 2 MB
// SP

document.addEventListener('DOMContentLoaded', () => {
  const filePattern = /\.(?:PDF|DOC|DOCX|XLS|XLSX|RTF)$/i;
  const summaryPattern = /\((PDF|DOC|DOCX|XLS|XLSX|RTF)\s*,?\s*([\d.]+)\s*(KB|MB|GB)\)/i;

  const elements = document.querySelectorAll('#qg-primary-content a, #qg-secondary-content a');

  elements.forEach((element) => {
    const fileMatch = element.href.match(filePattern);
    const summaryMatch = element.text.match(summaryPattern);

    if (fileMatch && summaryMatch) {
      const originalSummary = summaryMatch[0]; // "(PDF 1.56MB)"
      const contentType = summaryMatch[1].toUpperCase(); // "PDF"
      const fileSize = Math.ceil(parseFloat(summaryMatch[2])); // 1.56
      const fileSizeUnit = summaryMatch[3].toUpperCase(); // "MB"

      const newSummary = `<span class="meta">(${contentType}, ${fileSize} ${fileSizeUnit})</span>`;
      element.innerHTML = element.textContent.replace(originalSummary, newSummary); //(PDF 1.6 MB)
    }
  });
});
