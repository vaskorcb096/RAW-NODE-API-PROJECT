 //module scaffolding
 const environments={};
 environments.staging={
     port:3000,
     envName:'staging',
     secretKey:'drtgdrgdcdytry',
     maxChecks:5,
     twilio:{
        fromPhone:'+15005550006',
        accountSid:'ACfe10db8c01a5259872fcbcdea89f3315',
        authToken:'186a43a786de8ca216cc7eeb20606ec2',

    }
 }
 environments.production={
    port:5000,
    envName:'production',
    secretKey:'dxfiitygiduh',
    maxChecks:5,
    twilio:{
        fromPhone:'+15005550006',
        accountSid:'ACfe10db8c01a5259872fcbcdea89f3315',
        authToken:'186a43a786de8ca216cc7eeb20606ec2',

    }
}

//determine whichh enviroment was passed
const currentEnvironment =typeof process.env.NODE_ENV==='string'?process.env.NODE_ENV:'staging';
//export corresponding enviroment object
const environmentToExport=
    typeof environments[currentEnvironment]==='object'
    ?environments[currentEnvironment]:environments.staging;
 module.exports=environmentToExport;

