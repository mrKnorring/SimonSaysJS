/**
 * Constructs html string
 *
 * @param {string} tag tag type
 * @param {string} html html content
 * @param {object} attrs attributes, if any
 *
 * @example html('div', 'This is a div', { class: 'success bg', id: 'wrapper' })
 * @returns '<div id="wrapper" class="success bg">This is a div</div>'
 */
export const html = (tag, html, attrs) => {
	// you can skip html param
	if (typeof html == 'object') {
		attrs = html
		html = null
	}
	let h = `<${tag}`
	for (let attr in attrs) {
		if (attrs[attr] === false) continue
		h += ` ${attr}='${attrs[attr]}'`
	}
	return (h += html ? `>${html}</${tag}>` : ' />')
}

/**
 * Using the Fisher-Yates algorithm to reorder the elements of the array.
 *
 * @param {array} arr array to sort
 *
 * @example shuffle([1, 2, 3])
 * @returns [1, 3, 2]
 */
export const shuffle = ([...arr]) => {
	let l = arr.length
	while (l) {
		const i = Math.floor(Math.random() * l--)
		;[arr[l], arr[i]] = [arr[i], arr[l]]
	}
	return arr
}

/**
 * Masking a string
 *
 * @param {string} str string to be masked
 * @param {number} num characters to be left non masked
 * @param {string} mask mask characters test
 *
 * @example mask(1234567890)
 * @returns '******7890'
 */
export const mask = (str, num = 4, mask = '*') =>
	`${str}`.slice(-num).padStart(`${str}`.length, mask)

/**
 * Find words in given sentence
 *
 * @param {string} str sentence
 *
 * @example _findWords('some-mixed_string With spaces_underscores-and-hyphens')
 * @returns ['some', 'mixed', 'string', 'with', 'spaces', 'underscores', 'and', 'hyphens']
 */
const _findWords = (str) =>
	str &&
	str
		.match(
			/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
		)
		.map((x) => x.toLowerCase())

/**
 * Capitalize a string
 *
 * @param {string} str word
 *
 * @example _capitalize('test')
 * @returns 'Test'
 */
const _capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Turns a sentence of words to Kebab case
 *
 * @param {string} str string
 *
 * @example toKebabCase('some-mixed_string With spaces_underscores-and-hyphens')
 * @returns 'some-mixed-string-with-spaces-underscores-and-hyphens'
 */
export const toKebabCase = (str) => _findWords(str).join('-')

/**
 * Turns a sentence of words to Snake case
 *
 * @param {string} str string
 *
 * @example toKebabCase('some-mixed_string With spaces_underscores-and-hyphens')
 * @returns 'some_mixed_string_with_spaces_underscores_and_hyphens'
 */
export const toSnakeCase = (str) => _findWords(str).join('_')

/**
 * Turns a sentence of words to Pascal case
 *
 * @param {string} str string
 * @param {boolean} toPascal if result should be in pascal or camel case mode
 * @param {string} divider character
 *
 * @example toPascalCase('some-mixed_string With spaces_underscores-and-hyphens', true)
 * @returns 'SomeMixedStringWithSpacesUnderscoresAndHyphens'
 */
export const toPascalCase = (str, toPascal = true, divider = '') =>
	_findWords(str)
		.map((x, i) => (toPascal || i ? _capitalize(x) : x))
		.join(divider)

/**
 * Turns a sentence of words to Camel case
 *
 * @param {string} str string
 * @param {boolean} toPascal if result should be in pascal or camel case mode
 * @param {string} divider character
 *
 * @example toPascalCase('some-mixed_string With spaces_underscores-and-hyphens', true)
 * @returns 'someMixedStringWithSpacesUnderscoresAndHyphens'
 */
export const toCamelCase = (str) => toPascalCase(str, false)

/**
 * Turns a sentence of words to Title case
 *
 * @param {string} str string
 * @param {boolean} toPascal if result should be in pascal or camel case mode
 * @param {string} divider character
 *
 * @example toPascalCase('some-mixed_string With spaces_underscores-and-hyphens', true)
 * @returns 'Some Mixed String With Spaces Underscores And Hyphens'
 */
export const toTitleCase = (str) => toPascalCase(str, true, ' ')
