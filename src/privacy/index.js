// enforce the "starts with _ equals private"
// convention in js objects
const enforce = (key, action) => {
	if (key[0] === '_') {
		throw new Error(`Invalid attempt to ${action} private "${key}" property`);
	}
};

const privacyEnforcer = (target) => {
	const handler = {
		get(targ, key) {
			enforce(key, 'get');
			return targ[key];
		},
		set(targ, key, value) {
			enforce(key, 'set');
			targ[key] = value;
			return true;
		}
    };
	return new Proxy(target, handler);
};

export default privacyEnforcer;