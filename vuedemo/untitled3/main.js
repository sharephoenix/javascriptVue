import sdktt from './sdk.js'

sdktt.test({module: 'CustomSdk', event: 'customEvent', params: {'name': 'alex'}})
sdktt.test({module: 'XHBShare', event: 'shareQQ', params: {'name': 'alex'}})

// let dic = {name: 'alex', address: 'shanghai'}
// for (let key in dic) {
//     console.log('key::'+key, 'value:')
// }


// function testSometing() {
//     console.log("执行testSometing");
//     return "testSometing";
// }
//
// async function testAsync() {
//     console.log("执行testAsync");
//     return Promise.resolve("hello async");
// }
//
// async function test() {
//     console.log("test start...");
//     const v1 = await testSometing();//关键点1
//     console.log('----------------------')
//     console.log(v1);
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
//     console.log('----------------------')
// }
//
// test();
//
// console.log("========================")

// var promise = new Promise((resolve)=> {
//     console.log("promise start..");
//     resolve("promise");
// });//关键点2
// promise.then((val)=> {
//     console.log(val)
// });
//
// console.log("test end...")
