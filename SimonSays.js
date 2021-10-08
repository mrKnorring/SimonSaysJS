export const HTML = (tag, html, attrs) => {
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

// Uses the Fisher-Yates algorithm to reorder the elements of the array.
export const shuffle = ([...arr]) => {
	let l = arr.length
	while (l) {
		const i = Math.floor(Math.random() * l--)
		;[arr[l], arr[i]] = [arr[i], arr[l]]
	}
	return arr
}
