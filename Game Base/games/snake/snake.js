const canvas=document.getElementById('game');const ctx=canvas.getContext('2d');
const scale=20;const rows=canvas.height/scale;const cols=canvas.width/scale;
let snake=[{x:10,y:10}];let dir={x:0,y:0};let food=randomPos();let running=true;
document.addEventListener('keydown',e=>{
  const k=e.key; if(k==='ArrowUp'&&dir.y!==1)dir={x:0,y:-1};
  if(k==='ArrowDown'&&dir.y!==-1)dir={x:0,y:1};
  if(k==='ArrowLeft'&&dir.x!==1)dir={x:-1,y:0};
  if(k==='ArrowRight'&&dir.x!==-1)dir={x:1,y:0};
});
function randomPos(){return {x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)}}
function loop(){if(!running)return;update();draw();}
function update(){
  const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
  if(dir.x||dir.y)snake.unshift(head);
  if(head.x===food.x&&head.y===food.y){food=randomPos();}else{snake.pop();}
  if(head.x<0||head.y<0||head.x>=cols||head.y>=rows)running=false;
  for(let i=1;i<snake.length;i++)if(snake[i].x===head.x&&snake[i].y===head.y)running=false;
}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);
  // grid
  ctx.fillStyle='rgba(255,255,255,0.02)';for(let i=0;i<cols;i++){ctx.fillRect(i*scale,0,1,canvas.height)}
  for(let j=0;j<rows;j++){ctx.fillRect(0,j*scale,canvas.width,1)}
  // food
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--food')||'#ff6b6b';
  ctx.fillRect(food.x*scale,food.y*scale,scale,scale);
  // snake
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--snake')||'#7ee787';
  snake.forEach(s=>ctx.fillRect(s.x*scale,s.y*scale,scale,scale));
  if(!running){ctx.fillStyle='white';ctx.font='20px sans-serif';ctx.fillText('Game Over',130,200)}
}
setInterval(loop,120);
