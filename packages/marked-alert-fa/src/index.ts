import type { Marked, MarkedExtension, Tokens } from 'marked'
import type { Alert, AlertVariantItem, Options } from './types.js'
import { createSyntaxPattern, resolveVariants, ucfirst } from './utils.js'

export type { Alert, AlertVariantItem, Options }

/**
 * A [marked](https://marked.js.org/) extension to support [GFM alerts](https://github.com/orgs/community/discussions/16925).
 */
export default function markedAlertFa(options: Options = {}): MarkedExtension {
  const { className = 'markdown-alert', variants = [] } = options
  const resolvedVariants = resolveVariants(variants)

  return {
    walkTokens(token) {
      if (token.type !== 'blockquote') return

      const matchedVariant = resolvedVariants.find(({ type }) =>
        new RegExp(createSyntaxPattern(type)).test(token.text)
      )

      if (matchedVariant) {
        const {
          type: variantType,
          icon,
          title = ucfirst(variantType),
          titleClassName = `${className}-title`
        } = matchedVariant

        Object.assign(token, {
          type: 'alert',
          meta: {
            className,
            variant: variantType,
            icon,
            title,
            titleClassName
          }
        })

        const firstLine = token.tokens?.[0] as Tokens.Paragraph
        const firstLineText = firstLine.raw
          ?.replace(new RegExp(createSyntaxPattern(variantType)), '')
          .trim()

        if (firstLineText) {
          firstLine.tokens = (this as unknown as Marked).Lexer.lexInline(
            firstLineText
          )
          token.tokens?.splice(0, 1, firstLine)
        } else {
          token.tokens?.shift()
        }
      }
    },
    extensions: [
      {
        name: 'alert',
        level: 'block',
        renderer({ meta, tokens = [] }) {
          let tmpl = `<div class="${meta.className} ${meta.className}-${meta.variant}"><i class="fa fa-${meta.icon}"></i>\n`
          tmpl += `<p class="${meta.titleClassName}">`
          tmpl += meta.title
          tmpl += '</p>\n'
          tmpl += this.parser.parse(tokens)
          tmpl += '</div>\n'

          return tmpl
        }
      }
    ]
  }
}
