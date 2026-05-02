const c=document.getElementById('si'),g=c.getContext('2d');let px=c.width/2,py=c.height-30;let bullets=[];let invaders=[];
for(let i=0;i<5;i++)for(let j=0;j<6;j++)invaders.push({x:60+i*70,y:30+j*40});let dir=1;
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')px-=20;if(e.key==='ArrowRight')px+=20;if(e.key===' ')bullets.push({x:px,y:py-10})});
function loopSI(){g.clearRect(0,0,c.width,c.height);g.fillStyle='#0f0';g.fillRect(px-15,py,30,10);
  bullets.forEach(b=>{b.y-=8;g.fillRect(b.x-2,b.y,4,8)});
  invaders.forEach(inv=>{g.fillStyle='#f55';g.fillRect(inv.x,inv.y,28,18)});
  // move invaders
  let edge=false;invaders.forEach(inv=>{if(inv.x+dir*10<0||inv.x+dir*10>c.width-28)edge=true});
  invaders.forEach(inv=>{inv.x+=dir*10});if(edge){dir*=-1;invaders.forEach(inv=>inv.y+=10)}
  // collisions
  bullets=bullets.filter(b=>{let hit=false;for(let i=invaders.length-1;i>=0;i--){let inv=invaders[i];if(b.x>inv.x&&b.x<inv.x+28&&b.y>inv.y&&b.y<inv.y+18){invaders.splice(i,1);hit=true;break;}}return!hit&&b.y>0});
}
setInterval(loopSI,120);
