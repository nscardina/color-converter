import { LEGACY_RGB_SYNTAX_PATTERN, MODERN_RGB_SYNTAX_PATTERN, RGB_SYNTAX_PATTERN } from "./parse/rgb"
import { only } from "./parse/shared"

console.log(only(RGB_SYNTAX_PATTERN).test("rgb( 3 , 3 , 3, 3% )"))