# Working in GIT

## Creating a branch

**WARNING: Do not work directly in 'working', 'beta', or 'master' branches**

To keep the repository clean, branches must be prefixed into categories with a forwardslash /. Categories come from JIRA and are (note capitalisation): 

- Bugfix: For bugs and errors that will be released on the standard schedule
- Feature: For new features
- Hotfix: For critical bugs and errors which will be merged into the current release
- Enhance: For refactoring, or general improvements to existing features that do not add new features

Add the JIRA job number after the category type, and your initials so we can track who's responsible for each branch. If there is no JIRA task, just add your initials.

**Example 1: Bugfix/QOL-0000-Fixing-nav-nesting-issue**
**Example 2: Bugfix/NE-Fixing-nav-nesting-issue**

It's best to checkout files from working, or beta. *Note: working may not always be stable, in those instances use beta.*

**If you use git command line, use the following commands to create your branch**

```bash
git fetch origin
git checkout working
git checkout -b Bugfix/QOL-0000-Fixing-nav-nesting-issue
```


## Making a commit to git

Once you have made changes, prefix your commit message with the JIRA task number - if you have a JIRA task.

```bash
git commit -m "QOL-0000 - Your commit message"
```

This makes it easier to track which task each commit relates to.

---

Next, [making your changes to the project](making-changes.md)
