/*
Title:handle request response
Description:A restful API  to montior up and down time of user defined Link
Author:Vaskor Chakroborty
Date:05/05/2021
*/
//dependencies
const {StringDecoder}=require('string_decoder');
const url =require('url');
const routes =require('../routes');
const {notFoundHandler}=require('../handlers/routeHandlers/notFoundHandler');
const {parseJSON}=require('../helpers/utilities');
//moudle scaffolding
const handler ={};
handler.handleReqRes=(req,res)=>{
   //request handle
   const parseUrl=url.parse(req.url ,true);
   const path=parseUrl.pathname;
   const trimmedPath=path.replace(/^\/+|\/+$/g,'');
   const method =req.method.toLowerCase();
   const queryStringObject=parseUrl.query;
   const headersObject=req.headers;
   const requestProperties={
       parseUrl,
       path,
       trimmedPath,
       method,
       queryStringObject,
       headersObject,


   };
   const decoder=new StringDecoder('utf-8');
   let realData='';

   const chosenHandler=routes[trimmedPath]?routes[trimmedPath]:notFoundHandler;
   

   req.on('data',(buffer)=>{
     realData+=decoder.write(buffer);
   });
   req.on('end',()=>{
       realData+=decoder.end();
       requestProperties.body=parseJSON(realData);
       chosenHandler(requestProperties,(statusCode,payload)=>{
        statusCode=typeof(statusCode)==='number'?statusCode:500;
        payload =typeof(payload)==='object'?payload:{};
        const payloadString=JSON.stringify(payload);

        // return the final response
        res.setHeader('content-type','application/json');
        res.writeHead(statusCode);
        res.end(payloadString);
   })
     
     
   });
   
}
module.exports=handler;

