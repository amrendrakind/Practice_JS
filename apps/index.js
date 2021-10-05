function sendMessage(message, fn){
  return fn(message);
}
sendMessage("Hello World", console.log); // Hello World
// Another One

function add(a,b){
  return a+b
}
function substract(a,b){
  return a-b
}
function math(a,b,calllBack){
  return calllBack(a,b)
}
console.log(math(1,4,add))
console.log(math(8,5,substract))