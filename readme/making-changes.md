# Making changes

## Branch the repo if you haven't done so

See [Working in GIT](git.md) for instructions and guidelines

## Main commands

**Compiles and lints the project into the build folder for smoke testing**
```bash
gulp build
```
**Run local server, as well as watch and lint js**
Remember to run 'build' first.
```bash
watch:serve
```
**Compiles the released assets for deployment. Note: This will also automatically run a clean build**
```bash
gulp release
```

### Other commands

**Cleans up your build folder before running build, to keep things tidy**
```bash
gulp build:clean
```
**Command performs build as above then replaces ssi directives with JINJA2**
```bash
gulp build-jinja
```
**Watch and lint js**
```bash
gulp watch
```
**To start a local server**
```bash
gulp serve
```
**To run Unit tests and Linting tests**
```bash
gulp test
```
**To run E2E tests locally**.
```bash
gulp test:e2e
```
**To run E2E tests using Browserstack**.

Please make sure to setup browserstack _config file_ (step 3) and run _gulp serve_ before running browserstack E2E tests
```bash
gulp test:browserstack --browsers _browser names_
```
_browser name_ can be a browser or multiple browsers,
for example chrome or ie,chrome,safari
We can add more browser configurations in conf.js

To view testing reports (coverage, eslint and unit test)
```bash
gulp serve --type=reports-server
```

---

Next, [deploy the template](deploy.md)
