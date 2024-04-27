<div align="center">
<h1>♾️ Contributing ♾️</h1>
<br />
<p>Thank you for your interest in contributing!</p>

<br />

<!-- prettier-ignore-start -->
[![Test Status][badge-tests]][link-tests]
[![Code Coverage][badge-coverage]][link-coverage]
[![Last Commit][badge-commit]][badge-commit]
[![Size][badge-size-gh]][badge-size-gh]
[![All Contributors][badge-all-contributors]](#contributors-)
<!-- prettier-ignore-end -->

</div>

<br />

---

<br />



## About

Below are a list of ways that you can help contribute to this project, as well as policies and guides that explain how to get started.

Please review everything on this page before you submit your contribution.

<br />

- [About](#about)
- [Issues, Bugs, Ideas](#issues-bugs-ideas)
- [Development](#development)
  - [Before Submitting Pull Requests](#before-submitting-pull-requests)
  - [Conventional Commit Specification](#conventional-commit-specification)
    - [Types](#types)
      - [Example 1:](#example-1)
      - [Example 2:](#example-2)
  - [Referencing Issues](#referencing-issues)
  - [Commenting](#commenting)
  - [Variable \& Method Casing](#variable--method-casing)
  - [ESLint \& Prettier](#eslint--prettier)
  - [Indentation Style](#indentation-style)
  - [Spaces Instead Of Tabs](#spaces-instead-of-tabs)

<br />

---

<br />

## Issues, Bugs, Ideas
Stuff happens, and sometimes as best as we try, there may be issues within this project that we are unaware of. That is the great thing about open-source; anyone can use the program and contribute to making it better.

<br />

If you have found a bug, have an issue, or maybe even a cool idea; you can let us know by [submitting it](https://github.com/aetherinox/marked-alert-fa/issues). However, before you submit your new issue, bug report, or feature request; head over to the [Issues Section](https://github.com/aetherinox/marked-alert-fa/issues) and ensure nobody else has already submitted it.

<br />

Once you are sure that your issue is not already being dealt with; you may submit it [here](https://github.com/aetherinox/marked-alert-fa/issues/new/choose). You'll be asked to specify exactly what your new submission targets, such as:
- Bug report
- Feature Suggestion

<br />

When submitting your new report, ensure you fill out any of the questions asked of you. If you do not provide enough information, we cannot help. Be as detailed as possible, and provide any logs or screenshots you may have to help us better understand what you mean. Failure to fill out the submission properly may result in it being closed without a response.

<br />

If you are submitting a bug report:

- Explain the issue in detail
- Describe how you expect for a feature to work, and what you're seeing instead of what you expected.
- Provide screenshots, logs, or anything else that can visually help track down the issue.

<br />

<div align="center">

[![Submit Issue](https://img.shields.io/badge/submit%20new%20issue-de1f5c?style=for-the-badge&logo=github&logoColor=FFFFFF&link=mailto%3Aantelle.net%40gmail.com)](https://github.com/aetherinox/marked-alert-fa/issues)

</div>

<br />

<div align="center">

**[`^        back to top        ^`](#about)**

</div>

<br />

---

<br />

## Development
If you are looking to contribute to this project by actually submitting your own code; please review this section completely. There is important information and policies provided below that you must follow for your pull request to get accepted.

The source is here for everyone to collectively share and colaborate on. If you think you have a possible solution to a problem; don't be afraid to get your hands dirty.

All contributions are made by creating a **Pull Requests**. To make a pull request, you will need a GitHub account; if you are unclear on this process, see GitHub's documentation on forking and pull requests.

<br />

### Before Submitting Pull Requests

- Follow the repository's code formatting conventions (see below);
- Include tests that prove that the change works as intended and does not add regressions;
- Document the changes in the code and/or the project's documentation;
- Your PR must pass the CI pipeline;
- When submitting your Pull Request, use one of the following branches:
  - For bug fixes: `main` branch
  - For features & functionality: `development` branch
- Include a proper git commit message following the [Conventional Commit Specification](https://www.conventionalcommits.org/en/v1.0.0/#specification).

<br />

If you have completed the above tasks, the pull request is ready to be reviewed and your pull request's label will be changed to "Ready for Review". At this point, a human will need to step in and manually verify your submission.

Once your submission has been tested and verified; it will be merged.

<br />

### Conventional Commit Specification

When commiting your changes, we require you to follow the [Conventional Commit Specification](https://www.conventionalcommits.org/en/v1.0.0/#specification). The **Conventional Commits** is a specification for the format and content of a commit message. The concept behind Conventional Commits is to provide a rich commit history that can be read and understood by both humans and automated tools. Conventional Commits have the following format:

<br />

```
<type>[(optional <scope>)]: <description>

[optional <body>]

[optional <footer(s)>]
```

#### Types
| Type | Description |
| --- | --- |
| `feat` | Introduces a new feature |
| `fix` | Bug fix for the end-user |
| `deps` | Specifically targets adding new or updating existing dependencies |
| `docs` | Change to the website or Markdown documents |
| `build` | Alters the build process. E.g: creating a new build task, updating the release script, etc. |
| `test` | Adds or refactors tests, no production code change. Usually changes the suite of automated tests for the app. |
| `perf` | Improves performance of algorithms or general execution time of the app, but does not fundamentally change an existing feature. |
| `style` | Updates or reformats the style of the source code, but does not otherwise change the way the app is implemented. Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| `refactor` | Change to production code that leads to no behavior difference, E.g. splitting files, renaming internal variables, improving code style, etc. |
| `change` | Changes to an existing feature. |
| `chore` | Includes a technical or preventative maintenance task that is necessary for managing the app or the repo, such as updating grunt tasks, but is not tied to any specific feature. Usually done for maintanence purposes. |
| `ci` | Changes related to Continuous Integration (usually `yml` and other configuration files). |
| `misc` | Anything else that doesn't fit into another commit type. Usually doesn't change production code; yet is not ci, test or chore. |
| `revert` | Revert a previous commit |
| `remove` | Removes a feature from the app. Typically features are deprecated first for a period of time before being removed. Removing a feature from the app may be considered a breaking change that will require a major version number increment. |
| `deprecate` | Deprecates existing functionality, but does not remove it from the app. |

<br />

##### Example 1:

```
deps(core): make package compatible with fontawesome 6
^───^────^  ^────────────────────────────────^
│   │       │
│   │       └───⫸ (DESC):   Summary in present tense. Use lower case not title case!
│   │
│   └───────────⫸ (SCOPE):  The package(s) that this change affects
│
└───────────────⫸ (TYPE):   See list above
```

<br />

##### Example 2:
```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools....
  │
  └─⫸ Commit Type: build|ci|doc|docs|feat|fix|perf|refactor|test
                    website|chore|style|type|revert|deprecate
```

<br />

### Referencing Issues
If you are pushing a commit which addresses a submitted issue, reference your issue at the end of the commit message. You may also optionally add the major issue to the end of your commit body.

References should be on their own line, following the word `Ref` or `Refs`

```
Title:          fix: icons will not display within nested div [#2002]
Description:    The description of your commit

                Ref: #2002, #3004, #3007
```

<br />

### Commenting
Comment your code. If someone else comes along, they should be able to do a quick glance and have an idea of what is going on. Plus it helps novice readers to better understand the process.

<br />

### Variable & Method Casing
When writing your code, ensure you utilize `camelCase` when naming variables and methods.

<br />

### ESLint & Prettier
This project may be developed utilizing the following one or more packages:
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)

<br />

Within the root folder of the repo, there are several configuration files which you should be using within the project. These files dictate how prettier and eslint will behave and what is acceptable / not acceptable.

- [.eslintrc](https://github.com/aetherinox/marked-alert-fa/blob/main/.eslintrc) - ESLint < v9 config
- [eslint.config.mjs](https://github.com/aetherinox/marked-alert-fa/blob/main/eslint.config.mjs) - ESLint >= v9 config
- [.prettierrc](https://github.com/aetherinox/marked-alert-fa/blob/main/.prettierrc) - prettier rules

<br />

When submitting your pull request, these linting and style rules will be verified with all of your files. If you did not follow these rules; the linter tests on your pull request will fail; and you'll be expected to correct these issues before your submission will be transferred over for human review.

<br />

### Indentation Style
For files that are not controlled by prettier or eslint; you should be using the `Allman Style`.  This style puts the brace associated with a control statement on the next line, indented. Statements within the braces are indented to the same level as the braces.

<br />

```
return {
    status: "failure",
    user:
    {
        id: "1aaa35aa-fb3a-62ae-ffec-a14g7fc401ac",
        label: "Test String",
    }
};
```

<br />

### Spaces Instead Of Tabs
When writing your code, set your IDE to utilize **spaces**, with a configured size of `4 characters`. If this project utilizes ESLint, you should find the file `.editorconfig` in the root directory of the repo which defines how the file should be formatted. Load that file into programs such as Visual Studio Code.

<br />

<br />

<div align="center">

**[`^        back to top        ^`](#about)**

</div>

<!-- prettier-ignore-start -->
<!-- BADGE > GENERAL -->
[link-general-npm]: https://npmjs.com
[link-general-nodejs]: https://nodejs.org
[link-npmtrends]: http://npmtrends.com/@aetherinox/marked-alert-fa
<!-- BADGE > VERSION > GITHUB -->
[badge-version-gh]: https://img.shields.io/github/v/tag/Aetherinox/marked-alert-fa?logo=GitHub&label=Version&color=ba5225
[link-version-gh]: https://github.com/Aetherinox/marked-alert-fa/releases
<!-- BADGE > VERSION > NPMJS -->
[badge-version-npm]: https://img.shields.io/npm/v/@aetherinox/marked-alert-fa?logo=npm&label=Version&color=ba5225
[link-version-npm]: https://npmjs.com/package/@aetherinox/marked-alert-fa
<!-- BADGE > LICENSE -->
[badge-license-mit]: https://img.shields.io/badge/MIT-FFF?logo=creativecommons&logoColor=FFFFFF&label=License&color=9d29a0
[link-license-mit]: https://github.com/Aetherinox/marked-alert-fa/blob/main/LICENSE
<!-- BADGE > BUILD -->
[badge-build]: https://img.shields.io/github/actions/workflow/status/Aetherinox/marked-alert-fa/release-npm.yml?logo=github&logoColor=FFFFFF&label=Build&color=%23278b30
[link-build]: https://github.com/Aetherinox/marked-alert-fa/actions/workflows/release-npm.yml
<!-- BADGE > DOWNLOAD COUNT -->
[badge-downloads-gh]: https://img.shields.io/github/downloads/Aetherinox/marked-alert-fa/total?logo=github&logoColor=FFFFFF&label=Downloads&color=376892
[link-downloads-gh]: https://github.com/Aetherinox/marked-alert-fa/releases
[badge-downloads-npm]: https://img.shields.io/npm/dw/%40aetherinox%2Fmarked-alert-fa?logo=npm&&label=Downloads&color=376892
[link-downloads-npm]: https://npmjs.com/package/@aetherinox/marked-alert-fa
<!-- BADGE > DOWNLOAD SIZE -->
[badge-size-gh]: https://img.shields.io/github/repo-size/Aetherinox/marked-alert-fa?logo=github&label=Size&color=59702a
[link-size-gh]: https://github.com/Aetherinox/marked-alert-fa/releases
[badge-size-npm]: https://img.shields.io/npm/unpacked-size/@aetherinox/marked-alert-fa/latest?logo=npm&label=Size&color=59702a
[link-size-npm]: https://npmjs.com/package/@aetherinox/marked-alert-fa
<!-- BADGE > COVERAGE -->
[badge-coverage]: https://img.shields.io/codecov/c/github/Aetherinox/marked-alert-fa?token=MPAVASGIOG&logo=codecov&logoColor=FFFFFF&label=Coverage&color=354b9e
[link-coverage]: https://codecov.io/github/Aetherinox/marked-alert-fa
<!-- BADGE > ALL CONTRIBUTORS -->
[badge-all-contributors]: https://img.shields.io/github/all-contributors/Aetherinox/marked-alert-fa?logo=contributorcovenant&color=de1f6f&label=contributors
[link-all-contributors]: https://github.com/all-contributors/all-contributors
[badge-tests]: https://img.shields.io/github/actions/workflow/status/Aetherinox/marked-alert-fa/npm-tests.yml?logo=github&label=Tests&color=2c6488
[link-tests]: https://github.com/Aetherinox/marked-alert-fa/actions/workflows/tests.yml
[badge-commit]: https://img.shields.io/github/last-commit/Aetherinox/marked-alert-fa?logo=conventionalcommits&logoColor=FFFFFF&label=Last%20Commit&color=313131
[link-commit]: https://github.com/Aetherinox/marked-alert-fa/commits/main/
<!-- prettier-ignore-end -->
