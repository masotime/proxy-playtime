import fetch from 'node-fetch';
import test from 'ava';
import NetworkCalls from './';

const networkMock = {
	get(target, propKey, receiver) {
		const origMethod = target[propKey];
		return function (...args) {
			switch(propKey) {
				case 'create':
					
					return new fetch.Response(JSON.stringify({
						created: true,
						id: '4912304921049190234901903910249312091209'	
					}), {
						status: 201,
						statusText: 'Created'
					}).json();
					break;
				case 'get':
					
					return new fetch.Response(JSON.stringify({
						firstName: 'test',
						lastName: 'test',
						address: '123 fake st',
						city: 'tulsa',
						state: 'ca',
						zip: '99999',
						country: 'usa',
						mobile: '9995555888',
						id: '4912304921049190234901903910249312091209'
					}), {
						status: 200,
						statusText: 'OK'	
					}).json();
					break;
				default:
					return target[key];
					break;
			}
		};
	}
};

const thisShouldNotHappen = (err, t) => {
	// THIS SHOULD NOT HAPPEN
		if (err) {
			console.error(err);
			t.fail();
		}
}

test('testing create endpoint', async (t) => {
	const api = new NetworkCalls();
	const fakeApi = new Proxy(api, networkMock);
	
	try {
		const json = await fakeApi.create({
			test: 'lol'
		});
		t.is(json.created, true);
		
	} catch (err) {
		thisShouldNotHappen(err, t);
	}
});

test('testing get endpoint', async (t) => {
	const api = new NetworkCalls();
	const fakeApi = new Proxy(api, networkMock);
	
	try {
		
		const moreJson = await fakeApi.get('lollllllll😏😏😏😏😏😏😏😏😏');
		t.is(moreJson.firstName, 'test');
	} catch (err) {
		thisShouldNotHappen(err, t);
	}
});



