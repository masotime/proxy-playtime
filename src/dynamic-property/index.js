const dynaCache = {
	get(target, prop) {
		if (prop in target) {
			return target[prop];
		}
        // create dynamic names based on cache entries
		if (target instanceof Cachish) {
			if (target.data[prop]) {
				return target.get(prop);
			}
			// not found in the cache, reject
			return Promise.reject('Item not found');
		}
		return undefined;	
	}
};

export default dynaCache;
