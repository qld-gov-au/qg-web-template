# Deploying the template

## Versioning

Follow semantic versioning:
https://www.sitepoint.com/semantic-versioning-why-you-should-using/

All Major or Semi-major releases must be discussed with the product owner before release.

## How to publish release content on NPM

### What is npm?
npm makes it easy to share and reuse code, and it makes it easy to update the code that you’re sharing.

### Prerequisites
* Run __gulp release__ to make the content ready to be published.
* Clone NPM package repository (Ex for testing - https://github.com/AsifAmin/testnpmsib.git) as a __sibling directory__.
* __Please make sure you are logged into the npm as the correct user__ (npm login). 
 
### Usage
* Run __gulp npm:publish --msg="your commit msg"__ to start the publishing process. 
   * Confirm and enter a release type.
* Check the published content by going to the npm package home page (Ex for testing https://www.npmjs.com/package/testnpmsib).  
     


