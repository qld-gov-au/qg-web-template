# Deployment

Files compiled with this repository will be deployed to 
 1. [Web Template repository](https://github.com/qld-gov-au/web-template-release)
 2. [Static CDN](https://static.qgov.net.au)
    - [Repository link](https://servicesmadesimpler.govnet.qld.gov.au/bitbucket/projects/CDN/repos/static-qld_swe-v3_assets/browse)
 
## Steps to deploy
- Clone [repository](https://github.com/qld-gov-au/qg-web-template)
- Update version in package.json
- Run command ```npm run publish```
  - This will ask you for 
    1. npm account password (Will be with OSS Applications Team)
    2. your github credentials to commit code on to [Web Template repository](https://github.com/qld-gov-au/web-template-release)
  - Once the script runs successfully, it would have pushed code to 
    1. [Web Template repository](https://github.com/qld-gov-au/web-template-release)
    2. [Static CDN repository](https://servicesmadesimpler.govnet.qld.gov.au/bitbucket/projects/CDN/repos/static-qld_swe-v3_assets/browse)
- To deploy code onto Static CDN, 
  1. Navigate to [Bamboo](https://servicesmadesimpler.govnet.qld.gov.au/bamboo/browse/QSA-SWEV3)
  2. Create release from the latest build (automatic build runs when code is pushed to static cdn repo)
  3. Deploy this release onto Prod|Beta|Test|Dev
- Create release on Github (Ex: https://github.com/qld-gov-au/web-template-release/releases/tag/v1.0.6)
- Inform online experience team to send out communications

Useful links
Semantic versioning explanation:
https://www.sitepoint.com/semantic-versioning-why-you-should-using/

Tutorial - Publish to npm
https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738#.vsshhdfau
