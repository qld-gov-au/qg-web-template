# Deploying the template

## Versioning

Follow semantic versioning:
https://www.sitepoint.com/semantic-versioning-why-you-should-using/

All Major or Semi-major releases must be discussed with the product owner before release.

## How to publish release content on NPM

* __npm login__
* Clone https://github.com/qld-gov-au/web-template-release.git as a __sibling directory__ (next to the glue-template dir).
* __gulp npm:publish --msg="your commit msg"__ to start the publishing process. 
  * Confirm and enter a release type.
  * Check the published content by going to the npm package home page https://www.npmjs.com/package/web-template-release.
     


