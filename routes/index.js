var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

//route, routing 방향을 잡는다. 사용자들이 path를 통해 들어올때 그에 맞게 적절한 응답을 해주는 것
//app.get('/', (req, res) => res.send('Hello World!'))
router.get('/',function(request,response){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src="/images/hello.jpg" style="width:300px;display:block; margin-top:10px;">
      `,
      `<a href="/topic/create">create</a>`
    );
    response.send(html);
  });

module.exports = router;