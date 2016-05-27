import test from 'ava';
import Cachish from 'cachish';
import dynaCache from './';

 const fiveMinutes = 300 * 1000;
const $ = new Cachish(fiveMinutes);
const prox = new Proxy($, dynaCache);
const itemName = 'dogLeash';

const getItem = () => prox.itemName;
    
test('Dynamic properties: sync calls throw', async (t) => {
    
    try {
        const name = await $.get('itemName');
        // '$.get("itemName"), sync');
    } catch (err) {
        t.true(err instanceof Error, 'proxy.itemName, sync');
    }
   
}); 

test('Dynamic properties: async calls don not throw unless missing', async (t) => {
    
    setTimeout(async () => {
        try {
            const name = await $.get('itemName');
            t.is(name, itemName);
        } catch (err) {
            t.fail();
        }
    }, 50);

    setTimeout(async () => {
         try {
            const name = await prox.itemName;
            t.is(name, itemName);
        } catch (err) {
            t.fail();
        }
    }, 100);

    prox.set('itemName', itemName);

    setTimeout(async () => {
        console.log('missing key test');
         try {
            const name = await prox.missingKey;
        } catch (err) {
           t.true(err instanceof Error, 'proxy.missingKey, 120ms');
        }
    }, 120);

});

