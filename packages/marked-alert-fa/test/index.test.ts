/// <reference types="vitest/globals" />

import { readFileSync } from 'node:fs'
import { marked } from 'marked'
import markedAlert from '../src/index.js'

it('should render default alerts', () => {
  const md = readFileSync('test/fixtures/base.md', 'utf8')
  const html = marked.use(markedAlert()).parse(md)

  expect(html).toMatchSnapshot()
})

it('should parse first-line content correctly', () => {
  const md = '> [!NOTE]\n> This is a `note`!\n'
  const html = marked.use(markedAlert()).parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="markdown-alert markdown-alert-note"><i class="fa fa-note-sticky"></i>
    <p class="markdown-alert-title">Note</p>
    <p>This is a <code>note</code>!</p>
    </div>
    "
  `)
})

it('should render an alert with custom class name', () => {
  const md = '> [!TIP]\n> This is a `tip`!\n'
  const html = marked.use(markedAlert({ className: 'foo' })).parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="foo foo-tip"><i class="fa fa-lightbulb"></i>
    <p class="foo-title">Tip</p>
    <p>This is a <code>tip</code>!</p>
    </div>
    "
  `)
})

it('should render an alert with custom variant', () => {
  const md = '> [!DANGER]\nThis is a custom alert!\n'
  const html = marked
    .use(
      markedAlert({
        variants: [{ type: 'danger', icon: 'calendar' }]
      })
    )
    .parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="markdown-alert markdown-alert-danger"><i class="fa fa-calendar"></i>
    <p class="markdown-alert-title">Danger</p>
    <p>This is a custom alert!</p>
    </div>
    "
  `)
})

it('should render an alert with custom variant title', () => {
  const md = '> [!DANGER]\nThis is a custom alert!\n'
  const html = marked
    .use(
      markedAlert({
        variants: [
          { type: 'danger', icon: 'helmet', title: 'Oh snap!' }
        ]
      })
    )
    .parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="markdown-alert markdown-alert-danger"><i class="fa fa-helmet"></i>
    <p class="markdown-alert-title">Oh snap!</p>
    <p>This is a custom alert!</p>
    </div>
    "
  `)
})

it('should render an alert with custom variant titleClassName', () => {
  const md = '> [!NOTE]\nI bought it on ebay\n'
  const html = marked
    .use(
      markedAlert({
        variants: [
          {
            type: 'note',
            icon: 'ebay',
            titleClassName: 'text-ebay fw-medium'
          }
        ]
      })
    )
    .parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="markdown-alert markdown-alert-note"><i class="fa fa-ebay"></i>
    <p class="text-ebay fw-medium">Note</p>
    <p>I bought it on ebay</p>
    </div>
    "
  `)
})

it('should render alert with blockquote', () => {
  const md = `> [!WARNING]
> > multi line
> >
> > blockquote before
>
> This is a warning
`
  const html = marked.use(markedAlert()).parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="markdown-alert markdown-alert-warning"><i class="fa fa-triangle-exclamation"></i>
    <p class="markdown-alert-title">Warning</p>
    <blockquote>
    <p>multi line</p>
    <p>blockquote before</p>
    </blockquote>
    <p>This is a warning</p>
    </div>
    "
  `)
})

it('should render alert inside blockquote', () => {
  const md = `> This is a blockquote with
>
> > [!CAUTION]
> > Caution inside
`
  const html = marked.use(markedAlert()).parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<blockquote>
    <p>This is a blockquote with</p>
    <div class="markdown-alert markdown-alert-caution"><i class="fa fa-bolt"></i>
    <p class="markdown-alert-title">Caution</p>
    <p>Caution inside</p>
    </div>
    </blockquote>
    "
  `)
})

it('should render nested alert', () => {
  const md = `> [!NOTE]
> nested note
>
> > [!IMPORTANT]
> > This is an important alert
`
  const html = marked.use(markedAlert()).parse(md)

  expect(html).toMatchInlineSnapshot(`
    "<div class="markdown-alert markdown-alert-note"><i class="fa fa-note-sticky"></i>
    <p class="markdown-alert-title">Note</p>
    <p>nested note</p>
    <div class="markdown-alert markdown-alert-important"><i class="fa fa-circle-exclamation"></i>
    <p class="markdown-alert-title">Important</p>
    <p>This is an important alert</p>
    </div>
    </div>
    "
  `)
})

it('should render complex alerts', () => {
  const md = readFileSync('test/fixtures/complex.md', 'utf8')
  const html = marked.use(markedAlert()).parse(md)

  expect(html).toMatchSnapshot()
})
