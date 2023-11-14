/**
 * Normalize string input and 'deaccent' specific characters
 * https://stackoverflow.com/a/51874002
 *
 * @param value String value to normalize.
 * @returns Normalizes string without accent.
 */
export function normalizeNDF(value: string): string {
    return !value ? '' : value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
