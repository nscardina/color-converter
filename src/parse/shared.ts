export const CSS_NUMBER_PATTERN = /[\+-]?\d+/
export const CSS_PERCENTAGE_PATTERN = new RegExp(`${CSS_NUMBER_PATTERN.source}%`)
export const CSS_NONE_PATTERN = /none/
export const CSS_ALPHA_VALUE_PATTERN = new RegExp(`${CSS_NUMBER_PATTERN.source}|${CSS_PERCENTAGE_PATTERN.source}`)

export function only(regex: RegExp) {
    return new RegExp(`\\s*^${regex.source}\\s*$`)
}

export function isCSSNumber(text: string) {
    return only(CSS_NUMBER_PATTERN).test(text)
}

export function isCSSPercentage(text: string) {
    return only(CSS_PERCENTAGE_PATTERN).test(text)
}