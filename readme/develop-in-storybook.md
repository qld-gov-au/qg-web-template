# Develop in Storybook
[Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

## Goals of using Storybook
- Make visual testing possible, integrate with visual testing service like [Chromatic](https://www.chromatic.com/).
- Provide a clean and isolated UI component develop environment.
- Replace the legacy Github page documentation, as it has been migrated to [Forgov](https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe) and target audiences will be the end-users.
- Should not have any side effects on production code/bundle.

## Commands
### Start the Storybook locally
```
npm run start
```
### Build and serve the Storybook locally
```
npm run build-storybook
npx http-server storybook-static
```
### Release the Storybook to Github Page

The Storybook will publish to GH pages on every `push` in `master` branch with Github Actions workflow.

Other than that, you could publish Storybook to GH Pages manually from any branches with the `gh-pages` script.
```
npm run gh-pages
```

### Publish Storybook to Chromatic

The `publish-storybook` Github Actions workflow will automatically publish Storybook to Chromatic and generating visual testing snapshots on every `push` in any branch. Visual testing needs to be approved manually on every pull requests.

## Folder structure
To minimise the change on the existing folder structure, all the component stories contain in the folder `src/stories`.

Each component will have its own story folder which contains:
- The main Component stories module (eg. `src/stories/components/Buttons/Button.stories.mdx`).
- Template files for each story which contains the code that will be used in the code snippet and component renderer.
- The folder structure of the style/script of the UI components remain the same.

## What need to consider when creating stories for a component
- Create stories for each use case.
- Create different states of a component in a story so it they are testable.
- Create story for different viewport size so they are testable.
- Use [decorators](https://storybook.js.org/docs/react/writing-stories/decorators) to keep the code snippet clean and out of noise.
- We are not required to add author usage descriptions as [Forgov documentation ](https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe) will cover it, you can however add developer detailed descriptions where required.

## Attention
- Switch from one story to another story will not initiate the component instance javascript, so you will need to refresh the page to make the component functional.
- Manual page refresh is needed if style(scss) or javascript is modified.