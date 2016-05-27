import test from 'ava';
import privacyEnforcer from './';

test('Can get a public key, but not a _private one (beginning with _)', t => {
	const publicPrivateKeys = {
		public: 'ea3049021a3eqreae09430294',
		_private: 'eriroiasfjlsdak40392q40i9309ifds'
	};

	const enforcedKeys = privacyEnforcer(publicPrivateKeys);

	t.is(enforcedKeys.public, publicPrivateKeys.public);
	
	t.throws(() => {
		const evilPrivateKey = enforcedKeys._private;
	});

});
