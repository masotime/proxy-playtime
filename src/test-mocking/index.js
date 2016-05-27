import fetch from 'node-fetch';

class NetworkCalls {
	constructor() {
		
	}
	
	create(params) {
		fetch('https://offline.com/endpoint/?', {
			method: 'POST',
			body: JSON.stringify(params)
		}).then((response) => {
			return response.json()
		}).catch((err) => {
			console.error(err);
		});
	}

	get(id) {
		fetch('https://offline.com/endpoint/' + id)
			.then((response) => response.json())
			.catch((err) => console.error(err)); 
	}
};

export default NetworkCalls;