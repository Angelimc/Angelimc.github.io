function showContent(content) {
  document.getElementById("home").style.display = 'none';
  document.getElementById("projects").style.display = 'none';
  document.getElementById("resume").style.display = 'none';
  document.getElementById(content).style.display = 'block';
  showMenu(content);
}

function showMenu(content){
  if (content == "home") {
    document.getElementById("menu").style.display = 'none';
  } else {
    document.getElementById("menu").style.display = 'block';
  }
}

function printSentence(id, sentence, speed) {
  var index = 0,
      timer = setInterval(function() {
    var char= sentence.charAt(index);
    if(char === '<') index= sentence.indexOf('>',index);
    document.getElementById(id).innerHTML= sentence.substr(0,index);
    if(++index === sentence.length){
      clearInterval(timer);
    }
  }, speed);
}

printSentence(
  'typewrite',
  'Second year computer science student at UBC.',
  50
);
