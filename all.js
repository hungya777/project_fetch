const fetch = require('node-fetch');
const url = "https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));


// console.log(fetch);
// console.log('test1');



// const fetch = require('node-fetch');
// import fetch from 'node-fetch';
// const fetch = require("node-fetch");
// import fetch from 'node-fetch'
// const http = require('http');

// const requestListener = (req, res)=>{
//     const headers = {
//         "Content-type":"text/plain"
//     }
//     console.log(req.url);
//     console.log(req.method);
//     if(req.url=="/" && req.method == "GET"){  // "/"代表首頁
//         res.writeHead(200,headers);
//         res.write("index111");
//         res.end();
//     }else if(req.url=="/" && req.method == "DELETE"){  // DELETE : 刪除 
//         res.writeHead(200,headers);
//         res.write("delete!");
//         res.end();
//     }else{
//         res.writeHead(404,headers); //response回傳 404:代表找不到
//         res.write("not found");
//         res.end();
//     }

// }

// const server = http.createServer(requestListener);
// server.listen(3005);