//moudle scaffolding 
const handler={};
handler.sampleHandler=(requestProperties,callback)=>{
    console.log(requestProperties);
    callback(200,{
        message:'this is a sample Url',

    });
};
module.exports=handler;