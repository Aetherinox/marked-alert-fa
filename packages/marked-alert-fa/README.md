<div align="center">
<h1>marked-alert-fa ⚠️</h1>
<br />
<p>This package is a fork of marked-alert; however, it utilizes font-awesome icon IDs for the notifications instead of svg paths.</p>

<br />

<!-- prettier-ignore-start -->
[![Test Status][badge-tests]][link-tests]
[![Code Coverage][badge-coverage]][link-coverage]
[![Last Commit][badge-commit]][badge-commit]
[![Size][badge-size]][badge-size]
[![All Contributors][all-contributors-badge]](#contributors-)
<!-- prettier-ignore-end -->

</div>

<br />

---

<br />

## About
`marked-alert-fa` is an extension of [marked-alert](https://www.npmjs.com/package/marked-alert) which allows you to display github-like alerts within markdown.

For this package to run, you must have [marked](https://www.npmjs.com/package/marked) installed. This package however, does not require marked-alert. It is stand-alone.

You must have some form of Font-Awesome implemented in your project. The easiest way is to install the node package [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free)

While the original package utilizes SVG paths for the fonts; this package utilizes font-awesome path IDs.

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
- [Related](#related)

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

To get these icons to display within alerts, utilize [marked](https://www.npmjs.com/package/marked) to convert your markdown. You may use an example similar to the following:

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

Within your `.js` file, utilize something similar to:

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

You can also include `setOptions` and define other extensions, and call `parse()` separately.

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

The `markedAlertFa` extension accepts the same options as [markedAlert](https://www.npmjs.com/package/marked-alert):

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

The major different between this package and [markedAlert](https://www.npmjs.com/package/marked-alert) is that the `icon` field accepts only [Font Awesome](https://fontawesome.com/v6/icons?q=note&o=r&m=free) IDs. The reason for this was due to how our software it set up, and the end-user not having the ability to create their own calls in the back-end.

<br />

You can get the ID of an icon by going to the font-awesome website at https://fontawesome.com/v6/icons?q=note&o=r&m=free.

Select an icon and copy the font tag to the right of the icon.

<br />

<p align="center"><img style="width: 85%;text-align: center;border: 1px solid #353535;" src="https://github.com/Aetherinox/marked-alert-fa/assets/118329232/88d3ec1e-e00a-4ad2-98aa-a4b00fcf7c4d"></p>

<br />

In the example above, you would copy `file-circle-check`, and leave the `fa` off.

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

## Related
See [extensions list](https://github.com/bent10/marked-extensions#packages).

<br />

---

<br />

<!-- prettier-ignore-start -->
[link-npm]: https://npmjs.com
[link-node]: https://nodejs.org
[link-npmtrends]: http://npmtrends.com/marked-alert-fa
[link-license]: https://github.com/Aetherinox/marked-alert-fa/blob/master/LICENSE
[link-package]: https://npmjs.com/package/Aetherinox/marked-alert-fa
[link-coverage]: https://codecov.io/github/Aetherinox/marked-alert-fa
[link-build]: https://github.com/Aetherinox/marked-alert-fa/actions/workflows/build.yaml?query=workflow%3Abuild.yml
[link-tests]: https://github.com/Aetherinox/marked-alert-fa/actions/workflows/tests.yaml?query=workflow%3Atests.yml

[badge-commit]: https://img.shields.io/github/last-commit/Aetherinox/marked-alert-fa?color=b43bcc
[badge-size]: https://img.shields.io/github/repo-size/Aetherinox/marked-alert-fa?label=size&color=59702a
[badge-build]: https://img.shields.io/github/actions/workflow/status/Aetherinox/marked-alert-fa/build.yml?logo=github&label=Build&color=%23278b30
[badge-tests]: https://img.shields.io/github/actions/workflow/status/Aetherinox/marked-alert-fa/tests.yml?logo=github&label=Tests&color=%23278b30
[badge-coverage]: https://img.shields.io/codecov/c/github/Aetherinox/marked-alert-fa?token=MPAVASGIOG&logo=codecov&logoColor=FFFFFF&label=Coverage&color=354b9e
[badge-version]: https://img.shields.io/npm/v/Aetherinox/marked-alert-fa
[badge-downloads]: https://img.shields.io/npm/dm/marked-alert-fa.svg
[badge-license]: https://img.shields.io/npm/l/marked-alert-fa.svg
[all-contributors]: https://github.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/Aetherinox/marked-alert-fa?color=de1f6f&label=contributors
<!-- prettier-ignore-end -->
