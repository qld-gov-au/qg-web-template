# glue-swe-templates

_This project is currently in progress._

**Basic commands :**<br />
    - **npm install** to install all the node packages.<br />
    - **gulp build** command to create a build folder from the src folder files<br />
    - **gulp clean:build** command to remove the build folder before creating the new build folder<br />
    - **gulp release** command to create a release folder from the build folder files. Please make sure to run the _gulp build_ command before running the _gulp release_ command<br />
    - **gulp clean:release** command to remove the release folder before creating the new release folder
    
**Directory structure :**<br />
    - **src folder** contains all the files of the projects. This is where developers will be making all the changes.<br />
    - **build folder** is where developers will be pushing the changes from the _src folder_ to test the files before they push it to the _release folder_.<br />
    - **release folder** will be created from the _build folder_ files and it will be the final version which will be deployed to the CMS.<br />

           



