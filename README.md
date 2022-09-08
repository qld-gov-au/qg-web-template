# Queensland Government Web Template

**If you are using assets from this Repo, please send an email to qol.development@smartservice.qld.gov.au so we can add you to our change management communications list**

This template is designed to provide a template for all Franchise websites, and the underpinning technology for new Agency websites.

- [Getting started](readme/getting-started.md)
- [Develop in Storybook](readme/develop-in-storybook.md)
- [Working in GIT](readme/git.md)
- [Tech in use](readme/tech-in-use.md)
- [Making changes](readme/making-changes.md)
- [Deploying the template](readme/deploy.md)

## Repo structure
This repo should contain three main branches. DO NOT WORK DIRECTLY INTO THESE BRANCHES. Instead create your own branch in a folder format 'Bugfix/QOL-0000-Your-issue' (see [Working in GIT](readme/git.md) for more information).

## File structure

* gulp/ - Gulp functions and settings file
* product definitions/ - Definitions and requirements for this template
* src/ - This is where the source files for the template are kept
	* other-files/ - Special files for build and release
		* build/ - .htaccess file and other files required to get build to work. These are excluded on release.
		* release/ - readme.md and other files for the destination release repository. These are not included on build.
	* assets/
		* _project - SCSS, JS, external libraries, code-snippets, and images vital for the template to operate correctly. Files in here are compiled specially by gulp. Keep an eye on the build file when making changes. This directory will be renamed to the version number for the template (V3).
			* _blocks/ - Component based structure containing all SCSS, HTML and JS.
				* components/ - Re-usable modules
				* layout/ - Strictly elements that pertain to a certain area of the layout, for example heading or footer. Re-usable components should be stored in 'components'. **Note: Contains 'include' HTML partials**
				* legacy/ - Old legacy components that are to be re-built, not linted
				* utils/ - Re-usable elements only used by other internal JS or SCSS functions
				* scss-general/ - Non component SCSS
			* qg-main.js - Master switchbox for JS
			* qg-main.scss - Master switchbox for SCSS/CSS
		* images/ - Images for the template
		* lib/ - External libraries for use in the template
	* docs/ - The end user documentation / pattern library on using this template
	* template-pages/ - The template files that pull in the includes, css and js. These are automatically adjusted to point to local or CDN files on release.
* tests/ - All test functions

### Generated directories
* build/ - For testing your changes
* release/ - Makes the template ready for deployment

