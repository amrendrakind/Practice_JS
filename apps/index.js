function sendMessage(message, fn){
  return fn(message);
}

sendMessage("Hello World", console.log); // Hello World
