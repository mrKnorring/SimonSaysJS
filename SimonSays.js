/**
 * Construct html-string
 *
 * html('div', 'This is a div', { class: 'success bg', id: 'wrapper' }) => '<div id="wrapper" class="success bg">This is a div</div>'
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
 * Uses the Fisher-Yates algorithm to reorder the elements of the array.
 *
 * shuffle([1, 2, 3]) => [1, 3, 2]
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
 *
 * 
 * mask(1234567890) => '******7890'
 */
export const mask = (str, num = 4, mask = '*') =>
	`${str}`.slice(-num).padStart(`${str}`.length, mask)
