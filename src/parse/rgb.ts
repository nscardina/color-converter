import { CSS_ALPHA_VALUE_PATTERN, CSS_NONE_PATTERN, CSS_NUMBER_PATTERN, CSS_PERCENTAGE_PATTERN, only } from "./shared";

export const MODERN_RGB_SYNTAX_PATTERN = new RegExp(`rgb\\\((\\s*(${CSS_NUMBER_PATTERN.source}|${CSS_PERCENTAGE_PATTERN.source}|${CSS_NONE_PATTERN.source})\\s*){3}(\\s*/\\s*(${CSS_ALPHA_VALUE_PATTERN.source}|${CSS_NONE_PATTERN.source}))?\\s*\\)`)
export const LEGACY_RGB_SYNTAX_PATTERN = new RegExp(`(rgb\\((\\s*${CSS_PERCENTAGE_PATTERN.source}\\s*,\\s*){2}\\s*${CSS_PERCENTAGE_PATTERN.source}\\s*(,\\s*(${CSS_ALPHA_VALUE_PATTERN.source})\\s*)?\\s*\\))|(rgb\\((\\s*${CSS_NUMBER_PATTERN.source}\\s*,\\s*){2}\\s*${CSS_NUMBER_PATTERN.source}\\s*(,\\s*(${CSS_ALPHA_VALUE_PATTERN.source})\\s*)?\\s*\\))`)
export const RGB_SYNTAX_PATTERN = new RegExp(`${MODERN_RGB_SYNTAX_PATTERN.source}|${LEGACY_RGB_SYNTAX_PATTERN.source}`)

export function isModernRGBSyntaxPattern(text: string) {
    only(MODERN_RGB_SYNTAX_PATTERN).test(text)
}

export function isLegacyRGBSyntaxPattern(text: string) {
    only(LEGACY_RGB_SYNTAX_PATTERN).test(text)
}

export function isRGBSyntaxPattern(text: string) {
    only(RGB_SYNTAX_PATTERN).test(text)
}