const { send } = require('micro');

function interpretRequest(req) {
	if (!req.url.includes('?')) {
		return {};
	}

	const cleanReq = req.url.slice(req.url.indexOf('?') + 1);
	const cleanReqSplit = cleanReq.split('&');
	const properties = {};

	for (const x of cleanReqSplit) {
		const keyAndValue = x.split('=');
		const key = keyAndValue[0];
		const value = keyAndValue[1];
		properties[key] = value;
	}

	return properties;
}

function wait(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

module.exports = async (req, res) => {
	const properties = interpretRequest(req);

	if (properties.wait) {
		await wait(properties.wait);
	}

	let statusCode = 200;
	if (properties.statusCode) {
		statusCode = properties.statusCode;
	}

	let response = null;
	if (properties.response) {
		response = properties.response;
	}

	switch (properties.responseType) {
		case 'string':
			response = decodeURIComponent(response);
			break;
		case 'json':
			try {
				response = JSON.parse(decodeURIComponent(response));
			} catch (e) {
				response = `Error parsing your JSON: ${e}`;
			}
			break;
		default:
			response = decodeURIComponent(response);
			break;
	}

	send(res, statusCode, response);
};
