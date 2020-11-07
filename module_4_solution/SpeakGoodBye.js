
// SpeakGoodBye Function IIFE
// She speak Good bye when letter is === J -> Equal tip and value


(function(window){
  var byeSpeaker={};
  var speakWord = "Good Bye";
  byeSpeaker.speak=(name)=>{
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);

