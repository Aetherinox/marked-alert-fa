import type { AlertVariantItem } from './types.js'

/**
 * The default configuration for alert variants.
 */
const defaultAlertVariant: AlertVariantItem[] = [
  {
    type: 'note',
    icon: 'note-sticky'
  },
  {
    type: 'tip',
    icon: 'lightbulb'
  },
  {
    type: 'important',
    icon: 'circle-exclamation'
  },
  {
    type: 'warning',
    icon: 'triangle-exclamation'
  },
  {
    type: 'caution',
    icon: 'bolt'
  }
]

/**
 * Resolves the variants configuration, combining the provided variants with
 * the default variants.
 */
export function resolveVariants(variants: AlertVariantItem[]) {
  if (!variants.length) return defaultAlertVariant

  return Object.values(
    [...defaultAlertVariant, ...variants].reduce(
      (map, item) => {
        map[item.type] = item
        return map
      },
      {} as { [key: string]: AlertVariantItem }
    )
  )
}

/**
 * Returns regex pattern to match alert syntax.
 */
export function createSyntaxPattern(type: string) {
  return `^(?:\\[\\!${type.toUpperCase()}\\])[\s]*?\n?`
}

/**
 * Capitalizes the first letter of a string.
 */
export function ucfirst(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}
