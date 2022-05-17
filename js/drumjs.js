console.log('DrumKit project');
function removeTransition(e){
  if(e.prpertyName!=='transform')return;//skip if its not a transition 
  e.target.classList.remove('playing');
}
  let drum=document.addEventListener('keydown',function(e){
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
 //console.log(audio);
  if(!audio) return;
  else
  audio.currentTime=0;//rewind audio to start whenever press or hammer
  key.classList.add('playing');
  audio.play();
  console.log(key);

  });
let keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key =>key.addEventListener('transitionend',removeTransition)); 

 