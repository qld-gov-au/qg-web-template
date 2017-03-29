# glue-template

**If you are using assets from this Repo, please send an email to oss.products@dsiti.qld.gov.au so we can add you to our change management communications list**

_This project is currently a work in progress._

## Making changes - Create a branch

**WARNING: Do not work directly in 'working', 'beta', or 'master' branches**

To keep the repository clean, branches must be prefixed into categories with a forwardslash /. Categories come from JIRA and are (note capitalisation): 

- Bugfix: For bugs and errors that will be released on the standard schedule
- Feature: For new features
- Hotfix: For critical bugs and errors which will be merged into the current release
- Enhancement: For refactoring, or general improvements to existing features that do not add new features

Add the JIRA job number after the category type, and your initials so we can track who's responsible for each branch. If there is no JIRA task, just add your initials.
Example: Bugfix/QOL-100-NE-Fixing-nav-nesting-issue
It's best to checkout files from working, or beta. *Note: working may not always be stable, in those instances use beta.*

**If you use git command line, use the following commands to create your branch**

```bash
git fetch origin
git checkout working
git checkout -b Bugfix/QOL-100-NE-Fixing-nav-nesting-issue
```

Replace "Bugfix/QOL-100-Fixing-nav-nesting-issue" with your branch.

### Making a commit to git

Allways prefix your commit message with the JIRA task number - if you have a JIRA task.

```bash
git commit -m "QOL-100 - Your commit message"
```


**Basic commands :**<br />
    - Make sure node and npm are installed. Check using **node -v** and **npm -v** commands. If not already installed then please install from this website  [node website](https://nodejs.org/en/) <br />
    - **npm install** to install all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))<br />
    - **gulp build** command to create a build folder from the src folder files<br />
    - **gulp build-jinja** command performs build as above then replaces ssi directives with JINJA2 <br />
    - **gulp watch** command to sync changes between the src folder and the build folder on saving the files<br />
    - **gulp clean:build** command to remove the build folder before creating a new build folder<br />
    - **gulp release** command to create a release folder from the build folder files. Please make sure to run the _gulp build_ command before running the _gulp release_ command<br />
    - **gulp clean:release** command to remove the release folder before creating a new release folder<br />
    - **gulp local-server** This command will run a local server to view the templates in a browser.
    
    
**Directory structure :**<br />
    - **src folder** contains all the files of the projects. This is where developers will be making all the changes.<br />
    - **build folder** is where developers will be pushing the changes from the _src folder_ to test the files before they push it to the _release folder_.<br />
    - **release folder** will be created from the _build folder_ files and it will be the final version which will be deployed to the CMS.<br />


           



