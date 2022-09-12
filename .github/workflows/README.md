
TARGET_REPO secret must be set

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
