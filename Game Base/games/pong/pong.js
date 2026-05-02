const pc=document.getElementById('pong');const pctx=pc.getContext('2d');
let leftY=160,rightY=160;const paddleH=80,paddleW=10;let ball={x:pc.width/2,y:pc.height/2,vx:3,vy:2};
document.addEventListener('keydown',e=>{if(e.key==='w')leftY-=20;if(e.key==='s')leftY+=20;});
function loopP(){update();drawP();}
function update(){ // simple AI for right
  rightY+=(ball.y-(rightY+paddleH/2))*0.08;
  ball.x+=ball.vx;ball.y+=ball.vy;
  if(ball.y<0||ball.y>pc.height)ball.vy*=-1;
  if(ball.x<paddleW){if(ball.y>leftY&&ball.y<leftY+paddleH){ball.vx*=-1}else reset()}
  if(ball.x>pc.width-paddleW){if(ball.y>rightY&&ball.y<rightY+paddleH){ball.vx*=-1}else reset()}
}
function reset(){ball.x=pc.width/2;ball.y=pc.height/2;ball.vx*=-1}
function drawP(){pctx.clearRect(0,0,pc.width,pc.height);pctx.fillStyle='#fff';
  pctx.fillRect(0,leftY,paddleW,paddleH);pctx.fillRect(pc.width-paddleW,rightY,paddleW,paddleH);
  pctx.beginPath();pctx.arc(ball.x,ball.y,8,0,Math.PI*2);pctx.fill();}
setInterval(loopP,16);
