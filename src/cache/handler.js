const dynaCache = {
	get(target, prop) {
		console.log(`Prop: ${prop}`);
		if (prop in target) {
			return target[prop];
		}
        // create dynamic names based on cache entries
		if (target.data[prop]) {
			return target.get(prop);
		}
		// not found in the cache, reject
		return Promise.reject('Item not found');
	}
};

export default dynaCache;
