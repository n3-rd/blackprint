/**
 * @param {string} link
 */
export function addLink(link) {
	if (typeof Storage !== 'undefined') {
		if (localStorage.getItem('links') === null) {
			let links = JSON.parse(localStorage.getItem('links') || '[]');
			links.push(link);
			localStorage.setItem('links', JSON.stringify(links));
		} else {
			let links = JSON.parse(localStorage.getItem('links') || '[]');
			links.push(link);
			localStorage.setItem('links', JSON.stringify(links));
		}
	} else {
		console.error('Local storage is not available');
	}
}
