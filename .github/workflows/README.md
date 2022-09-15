# Publish with Github Action (WIP, not implemented yet)
## TARGET_REPO secret must be set

e.g.

qld-gov-au/web-template-release

GH_TOKEN secret must be set

At this time this for repo qld-gov-au/qg-web-template it is set to a GHA token for @duttonw

structure of the GH_TOKEN is

${username}:${token}

e.g. username:mypersonalaccesstoken

if this fails, generate a new token via
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
and update the secret

# Publish Storybook to Github pages

The `publish-storybook` will publish Storybook to GH pages on every `push` in `master` branch.

Other than that, you could publish Storybook to GH Pages manually from any branches with the `gh-pages` script.

# Publish Storybook to Chromatic (Trial)

The `publish-storybook` will publish Storybook to Chromatic and generating visual testing snapshots on every `push` in any branch. Currently it links to a trial chromatic account.

To change that in official implementation, update the Github Actions Secrets `CHROMATIC_PROJECT_TOKEN`, 
please follow https://www.chromatic.com/docs/github-actions#setup for instruction.
