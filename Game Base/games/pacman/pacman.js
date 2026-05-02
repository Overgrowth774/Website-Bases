// Minimal Pac-Man skeleton: grid + player move; expand maze and ghosts as needed
const pcv=document.getElementById('pac'),pctx=pcv.getContext('2d');const CELL=20,GRID=21;let player={x:10,y:15,dir:{x:-1,y:0}};
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')player.dir={x:-1,y:0};if(e.key==='ArrowRight')player.dir={x:1,y:0};if(e.key==='ArrowUp')player.dir={x:0,y:-1};if(e.key==='ArrowDown')player.dir={x:0,y:1};});
function loopP(){player.x=(player.x+player.dir.x+GRID)%GRID;player.y=(player.y+player.dir.y+GRID)%GRID;drawP();}
function drawP(){pctx.clearRect(0,0,pcv.width,pcv.height);pctx.fillStyle='#ffc107';pctx.beginPath();pctx.arc(player.x*CELL+CELL/2,player.y*CELL+CELL/2,CELL/2-2,0,Math.PI*2);pctx.fill();}
setInterval(loopP,160);
