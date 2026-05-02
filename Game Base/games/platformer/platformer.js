// Minimal platformer scaffold: gravity, simple platforms, and player controls
const pc=document.getElementById('plat'),gctx=pc.getContext('2d');let player={x:50,y:50,w:24,h:32,vx:0,vy:0,grounded:false};
const platforms=[{x:0,y:320,w:640,h:40},{x:150,y:240,w:120,h:12},{x:320,y:180,w:140,h:12}];
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')player.vx=-3;if(e.key==='ArrowRight')player.vx=3;if(e.key===' '&&player.grounded){player.vy=-8;player.grounded=false}});
function loop(){player.vy+=0.35;player.x+=player.vx;player.y+=player.vy;player.vx*=0.9;player.grounded=false;
  platforms.forEach(p=>{if(player.x+player.w>p.x&&player.x<p.x+p.w&&player.y+player.h>p.y&&player.y+player.h<p.y+20){player.y=p.y-player.h;player.vy=0;player.grounded=true}});
  draw();}
function draw(){gctx.clearRect(0,0,pc.width,pc.height);gctx.fillStyle='#fff';gctx.fillRect(player.x,player.y,player.w,player.h);gctx.fillStyle='#6b6b6b';platforms.forEach(p=>gctx.fillRect(p.x,p.y,p.w,p.h));}
setInterval(loop,16);
