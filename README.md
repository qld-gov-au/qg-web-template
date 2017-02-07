# glue-template

**If you are using assets from this Repo, please send an email to oss.products@dsiti.qld.gov.au so we can add you to our change management communications list**

_This project is currently a work in progress._

**Basic commands :**<br />
    - Make sure node and npm are installed. Check using **node -v** and **npm -v** commands. If not already installed then please install from this website  [node website](https://nodejs.org/en/) <br />
    - **npm install** to install all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))<br />
    - **gulp build** command to create a build folder from the src folder files<br />
    - **gulp build-jinja** command performs build as above then replaces ssi directives with JINJA2 <br />
    - **gulp watch** command to sync changes between the src folder and the build folder on saving the files<br />
    - **gulp clean:build** command to remove the build folder before creating a new build folder<br />
    - **gulp release** command to create a release folder from the build folder files. Please make sure to run the _gulp build_ command before running the _gulp release_ command<br />
    - **gulp clean:release** command to remove the release folder before creating a new release folder<br />
    - **gulp generate --template=nameOftheTemplate** where name of the template can be swe/cue/flux/ice. This command will provide a link to view the templates in a browser.
    
    
**Directory structure :**<br />
    - **src folder** contains all the files of the projects. This is where developers will be making all the changes.<br />
    - **build folder** is where developers will be pushing the changes from the _src folder_ to test the files before they push it to the _release folder_.<br />
    - **release folder** will be created from the _build folder_ files and it will be the final version which will be deployed to the CMS.<br />


           



