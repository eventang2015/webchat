'use strict'

var Koa=require('koa');
var sha1=require('sha1');
var config={
    wechat:{
        appId:'wxd97732294d081c1d',
        appSecret:'ec2d96a460c123c89cd8855309f42512',
        token:'wechatnodejs'
    }
};
var app=new Koa();

app.use(function *(next){
    this.body = 'Hello World';

    // console.log(this.query);
    // var token=config.token;
    // var signature=this.query.signature;
    // var nonce=this.query.nonce;
    // var timestamp=this.query.timestamp;
    // var echostr=this.query.echostr;
    // var str=[token,timestamp,nonce].sort().join('');
    // var sha=sha1(str);
    // if(sha===signature){
    //     this.body=echostr+'';
    // }else{
    //     this.body='wrong';
    // }

});
app.listen(3000);
console.log('listening:3000');