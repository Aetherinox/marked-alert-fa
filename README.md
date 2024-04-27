<div align="center">
<h1>marked-alert-fa ⚠️</h1>
<br />
<p>This package is a fork of marked-alert; however, it utilizes font-awesome icon IDs for the notifications instead of svg paths.</p>

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
`marked-alert-fa` is an extension of [marked-alert](https://www.npmjs.com/package/marked-alert) which allows you to display github-like alerts within markdown.

For this package to run, you must have [marked](https://www.npmjs.com/package/marked) installed. This package however, does not require marked-alert. It is stand-alone.

You must have some form of Font-Awesome implemented in your project. The easiest way is to install the node package [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free)

While the original package utilizes SVG paths for the icons; this package utilizes font-awesome path IDs.

The following icons are utilized by default:

<br />

| Alert ID | Icon |
| --- | --- |
| Note | <img src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/a8edf5b9-8c55-4a03-9edb-676c11d28d49"> |
| Tip | <img src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/7225251b-69fb-425a-84aa-ac62d86a0b89"> |
| Important | <img src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/4c281bdc-303d-4e78-9a1d-6e6d9f23af61"> |
| Warning | <img src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/5cef5803-66a5-4c50-aa93-700fb606454e"> |
| Caution | <img src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/291ec535-e641-4cfe-86bf-4699e85a6a05"> |

<br />

---

<br />


- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
  - [Default Alert Variants](#default-alert-variants)
- [Updates](#updates)
- [Related Packages:](#related-packages)
- [Contributors ✨](#contributors-)

<br />

---

<br />

## Install

You can install `marked-alert-fa` using npm or yarn:

```bash
npm i @Aetherinox/marked-alert-fa
# or
yarn add @Aetherinox/marked-alert
```

<br />

---

<br />

## Usage

These alerts are similar to the ones utilized on Github:

> [!NOTE]
> This is a note

> [!TIP]
> This is a tip

> [!IMPORTANT]
> This is important

> [!WARNING]
> This is a warning

> [!CAUTION]
> This is a caution

<br />

To get these icons to display within alerts, you need [marked](https://www.npmjs.com/package/marked) installed to convert your markdown. You may use an example similar to the following:

<br />

```md
# Example

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

<br />

Within your `.js` file, you can use the below example:

<br />

```js
import { readFileSync } from 'node:fs'
import { Marked } from 'marked'
import markedAlertFa from '@aetherinox/marked-alert-fa';

const html = new Marked()
  .use(markedAlertFa())
  .parse(readFileSync('example.md', 'utf8'))

console.log(html)
```

<br />

After marked does its work, you should have the following output::

```html
<h1>Example</h1>
<div class="markdown-alert markdown-alert-note"><i class="fa fa-note-sticky"></i>
  <p class="markdown-alert-title">Note</p>
  <p>Highlights information that users should take into account, even when skimming.</p>
</div>
<div class="markdown-alert markdown-alert-tip"><i class="fa fa-lightbulb"></i>
  <p class="markdown-alert-title">Tip</p>
  <p>Optional information to help a user be more successful.</p>
</div>
<div class="markdown-alert markdown-alert-important"><i class="fa fa-circle-exclamation"></i>
  <p class="markdown-alert-title">Important</p>
  <p>Crucial information necessary for users to succeed.</p>
</div>
<div class="markdown-alert markdown-alert-warning"><i class="fa fa-triangle-exclamation"></i>
  <p class="markdown-alert-title">Warning</p>
  <p>Critical content demanding immediate user attention due to potential risks.</p>
</div>
<div class="markdown-alert markdown-alert-caution"><i class="fa fa-bolt"></i>
  <p class="markdown-alert-title">Caution</p>
  <p>Negative potential consequences of an action.</p>
</div>
```

<br />

You can also include `setOptions` and define other extensions:

```js
import { Marked } from 'marked';
import markedAlertFa from '@aetherinox/marked-alert-fa';

  const html = new Marked()
      .setOptions({
          renderer: new YourRenderer(),
          breaks: true,
          gfm: true,
          tables: true
      })
      .use(markedAlertFa())
      .use(markedFootnote())
      .parse(readFileSync('example.md', 'utf8'));

  console.log(html)
```

---

<br />

## Options

The `marked-alert-fa` extension accepts the same options as [marked-alert](https://www.npmjs.com/package/marked-alert):

- `className`: A string representing a custom CSS class for the alerts.
- `variants`: An array of alert variants, where each variant is configured with a type, icon, and title class name. This allows you to create different alert types.

<br />

### Default Alert Variants

The extension includes default alert variants:

- `[!NOTE]`: Highlights information that users should take into account, even when skimming.
- `[!TIP]`: Optional information to help a user be more successful.
- `[!IMPORTANT]`: Crucial information necessary for users to succeed.
- `[!WARNING]`: Critical content demanding immediate user attention due to potential risks.
- `[!CAUTION]`: Negative potential consequences of an action.

<br />

Each variant has an associated icon and title class name which is shown in the [About](#about) section above.

You can customize the default alert variants and add your own.

```js
const options = {
  variants: [
    {
      type: 'danger',
      icon: 'clipboard',
      title: 'Hello world', // optional
      titleClassName: 'text-danger' // optional
    }
  ]
}
```

<br />

The major different between this package and [marked-alert](https://www.npmjs.com/package/marked-alert) is that the `icon` field accepts only [Font Awesome](https://fontawesome.com/v6/icons?q=note&o=r&m=free) IDs. The reason for this was due to how our software it set up, and the end-user not having the ability to create their own calls in the back-end.

<br />

You can get the ID of an icon by going to the font-awesome website at https://fontawesome.com/v6/icons?q=note&o=r&m=free.

Select an icon and copy the font tag to the right of the icon.

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/88d3ec1e-e00a-4ad2-98aa-a4b00fcf7c4d"></p>

<br />

In the example above, copy `file-circle-check`, and leave the `fa` off.

<br />

```js
const options = {
  variants: [
    {
      type: 'success',
      icon: 'file-circle-check',
      title: 'File Uploaded',
      titleClassName: 'text-danger'
    }
  ]
}
```

<br />

---

<br />

## Updates
This was originally developed for one software title. If others find it useful, I'll update it and add additional things.

<br />

---

<br />

## Related Packages:
- [MarkedJS](https://github.com/markedjs/marked)
- [Marked-Alert](https://www.npmjs.com/package/marked-alert)
- [Marked Extensions List](https://github.com/bent10/marked-extensions#packages)

<br />

---

<br />

## Contributors ✨
We are always looking for contributors. If you feel that you can provide something useful to this package, then we'd love to review your suggestion. Before submitting your contribution, please review the following resources:

- [Pull Request Procedure](https://github.com/Aetherinox/marked-alert-fa/tree/main/.github/PULL_REQUEST_TEMPLATE.md)
- [Contributor Policy](CONTRIBUTING.md)

<br />

Want to help but can't write code?
- Review [active questions by our community](https://github.com/Aetherinox/marked-alert-fa/labels/help%20wanted) and answer the ones you know.

<br />

The following people have helped get this project going:

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![Contributors][badge-all-contributors]](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://gitlab.com/Aetherinox"><img src="https://avatars.githubusercontent.com/u/118329232?v=4?s=40" width="40px;" alt="Aetherinox"/><br /><sub><b>Aetherinox</b></sub></a><br /><a href="https://github.com/Aetherinox/marked-alert-fa/commits?author=Aetherinox" title="Code">💻</a> <a href="#projectManagement-Aetherinox" title="Project Management">📆</a> <a href="#fundingFinding-Aetherinox" title="Funding Finding">🔍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<br />

---

<br />

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
