
// SpeakHello Function IIFE
// Speak Hello when the letter is iqual: "J" -> Tip and value;

(function(window){

  var helloSpeaker ={};

  helloSpeaker.speak = (name)=>{
  var speakWord = "Hello";
  console.log(speakWord + " " + name);
}
  window.helloSpeaker=helloSpeaker;

})(window);

 