x = 0;
y = 0;
screen_width=0;
screen_height=0;
draw_apple = "";
speak_data="";
to_number=0;
apple="";

var SpeechRecognition = window.webkitSpeechRecognition;  
var recognition = new SpeechRecognition();

function preload() {
    img = loadImage('Green-Apple.png');
  }
  function setup() {
 
    screen_width = window.innerWidth;
    screen_height = window.innerWidth;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(0, 150);
  }
  function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{
    console.log(event); 
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
      draw_apple = "set";
      document.getElementById("status").innerHTML = "Started drawing apple";
    }
    else
    {
      document.getElementById("status").innerHTML = "The speech recognized is not a number";
    }
    
}
function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
 
  function draw() {
    if (draw_apple == "set") {
      for(var i = 1;i<=to_number;i++)
      {
        x = Math.floor(Math.random()*700);
        y = Math.floor(Math.random()*400);
        image(img, x, y, 150, 50);
      }
  
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
      speak_data = to_number+"apples drawn";
      speak()
      draw_apple = "";
    }
  }
  

