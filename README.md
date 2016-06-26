# glue-swe-templates

_This project is currently in progress._

Basic commands :
    - npm install to install all the node packages.
    - **gulp build** command to create a build folder from the src folder files
    - **gulp release** command to create a release folder from the build folder files. Please make sure to run the **gulp build** command before running the **gulp release** command
    - **gulp clean:build** command to remove the build folder before creating the new build folder
    - **gulp clean:release** command to remove the release folder before creating the new release folder
    
Directory structure :
    - **src folder** contains all the files of the projects. This is where developers will be making all the changes.
    - **build folder** is where developers will be pushing the changes from the _src folder_ to test the files before they push it to the _release folder_.
    - **release folder** will be created from the _build folder_ files and it will be the final version which will be deployed to the CMS.

           



