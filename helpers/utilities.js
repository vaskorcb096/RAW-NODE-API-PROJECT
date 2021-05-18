//dependencies
//module scaffolding
const crypto=require('crypto');
const environment =require('../helpers/environment')
const utilities={};
//parse json string to object
utilities.parseJSON=(jsonString)=>{
    let output;
    try{
        output=JSON.parse(jsonString);

    }
    catch{
        output={};

    }
    return output;
};
utilities.hash=(str)=>{
    if(typeof(str)==='string' && str.length>0) {
        const hash=crypto
        .createHmac('sha256',environment.secretKey)
        .update(str)
        .digest('hex');
        return hash;

    }
     return false;

};
//create random String
utilities.createRandomString=(strlen)=>{
   let length=strlen;
   length=typeof(strlen)==='number'&& strlen>0 ?strlen:false;
   if(length) {
    const possibleCharacter='abcdefghijklmnopqrstuvwxyz0123456789';
    let output="";
    for(let i=1;i<=strlen;i++) {
        let randomCharacter=possibleCharacter.charAt(Math.floor(Math.random()*possibleCharacter.length));
        output+=randomCharacter;
    }
    return output;

   }
   else{
       return false;
   }

};



module.exports=utilities;