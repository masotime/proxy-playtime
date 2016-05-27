import Cachish from 'cachish';
import dynaCache from './handler';

const fiveMinutes = 300 * 1000;
const $ = new Cachish(fiveMinutes);
const prox = new Proxy($, dynaCache);

const getItem = (obj, key, desc, proxy) => () => {
    ((proxy) ? obj[key] : obj.get(key))
        .then((value) => console.log(`(val) ${desc}: `, value))
        .catch((err) => console.error(`(err) ${desc}: `, err.message));
};

setTimeout(getItem($, 'itemName', 'direct async'), 50);
setTimeout(getItem(prox, 'itemName', 'proxy async', true), 100);

prox.set('itemName', 'dogLeash');

getItem(prox, 'itemName', 'proxied sync', true)();
getItem($, 'itemName', 'direct sync')();

setTimeout(getItem(prox, 'missingKey', 'proxied async missing', true), 100);
