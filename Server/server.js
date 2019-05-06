var io = require('socket.io')(process.env.PORT || 3000);

console.log("server started");

var playerCount = 0;
var Randing = 0;
io.on("connection",function(socket){

console.log("client connected");
Randing = Math.floor(Math.random() * 100); //Random Number
//socket.broadcast.emit('spawn');
playerCount++;
 
socket.on("OnRan",function(num){
 
     
    if(num.mynum == Randing){
        socket.emit("win");
        socket.broadcast.emit('Over');
        Randing = Math.floor(Math.random() * 100);
    }else{
        socket.emit("miss");
    }
     
  console.log (Randing);
     
}); 
socket.on("win",function(){
 
}); 
socket.on("miss",function(){
 
}); 
socket.on("disconnect",function(){

    console.log("client disconnect");
    playerCount--;
}); 



});
  
  