import { qrcodeName, qrcodeText } from '$lib/stores';

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

/**
 * @param {string} entry
 */
export function setQrCode(entry) {
	qrcodeText.set(entry);
	qrcodeName.set(`${entry.slice(0, 20)}...`);
}

/**
 * @param {{ toDataURL: (arg0: string) => string; }} canvas
 */
export function saveAsImage(canvas) {
	let link = document.createElement('a');
	link.download = 'qrcode.png';
	link.href = canvas.toDataURL('image/png');
	link.click();
}
