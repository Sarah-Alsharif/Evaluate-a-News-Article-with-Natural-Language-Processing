import "babel-polyfill"
const analysis = require('../js/analysis')


test('this is analysis test', async()=>{
    expect(analysis).toBeDefined();
});

