import privacyEnforcer from './handler';

const publicPrivateKeys = {
	public: 'ea3049021a3eqreae09430294',
	_private: 'eriroiasfjlsdak40392q40i9309ifds'
};

const enforcedKeys = privacyEnforcer(publicPrivateKeys);

try {
	console.log(`PUBLICKEY: ${enforcedKeys.public}`);
	console.log(`PRIVATEKEY: ${enforcedKeys._private}`);
} catch (err) {
	console.error(`ERROR: ${err}`);
}
