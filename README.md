# Queensland Government Web Template

**If you are using assets from this Repo, please send an email to oss.products@dsiti.qld.gov.au so we can add you to our change management communications list**

This template is designed to provide the template for all Franchise websites, and the underpinning technology for new Agency websites.

_This project is currently a work in progress._

- [Getting started](readme/getting-started.md)
- [Deploying the template](readme/deploy.md)

## Repo structure
This repo should contain three main branches. DO NOT WORK DIRECTLY INTO THESE BRANCHES. Instead create your own branch using the below 'creating new branches' instructions, and use a pull request to get that into the working branch.

- working: For integrating features for the next version
- beta: For testing
- master: The current live assets

## File structure

* gulp/ - Gulp functions and settings file
* product definitions/ - Definitions and requirements for this template
* src/ - This is where the source files for the template are kept
	* assets/
		* _project/ - SCSS, JS, external libraries, code-snippets, and images vital for the template to operate correctly. Files in here are compiled specially by gulp. Keep an eye on the build file when making changes. This directory will be renamed to the version number for the template (V3).
			* js/ - 
				* legacy/ - Old legacy components that are to be re-built, not linted
			* scss/ - 
		* images/ - Images for the template
		* includes - The main SSI includes. This folder is split into includes/ and includes-cdn/ (which are automatically re-written to point to CDN assets) on release.
	* documentation/ - The end user documentation on using this template
	* other-files/ - Special files for build and release
		* build/ - .htaccess file and other files required to get build to work. These are excluded on release.
		* release/ - readme.md and other files for the destination release repository. These are not included on build.
	* template/ - The template files that pull in the includes, css and js. These are automatically adjusted to point to local or CDN files on release.
* tests/ - All test functions
