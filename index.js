/*
Title:Project Initial File 
Description:Initial File to Start the node server  and workers 
Author:Vaskor Chakroborty
Date:05/05/2021
*/

//dependencies
const server=require('./lib/server')
const workers=require('./lib/worker')
//app object or module scaffolding
const app={};
app.init=()=>{
    //start the server
    server.init();

    // start the worker 
    workers.init();
}
app.init();
//export the app
 
module.exports=app;



