
  // 引入mockjs
   const Mock = require('mockjs')
 // 获取 mock.Random 对象
 const Random = Mock.Random
class MockDefault {
  constructor() {
  }
produceNewsData: Function = function () {
  let articles = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      name: "alexluan",
      address: "shanghai",
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
 }
 testmock () {  
  // 拦截ajax请求，配置mock的数据
 Mock.mock('http://www.baidu.com/api/users', 'get', this.produceNewsData())
 console.log('test')
}
}
 export default new MockDefault()
 
 

 