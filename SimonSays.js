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
