const tc=document.getElementById('tetris');const tctx=tc.getContext('2d');
const COLS=10,ROWS=20,BLOCK=24;const arena=createMatrix(COLS,ROWS);
function createMatrix(w,h){const m=[];while(h--)m.push(new Array(w).fill(0));return m}
const pieces=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]],[[0,1,0],[1,1,1]]];
function drawMatrix(matrix,offset){tctx.fillStyle='#fff';matrix.forEach((row,y)=>row.forEach((v,x)=>{if(v){tctx.fillRect((x+offset.x)*BLOCK,(y+offset.y)*BLOCK,BLOCK-1,BLOCK-1)}}))}
function draw(){tctx.clearRect(0,0,tc.width,tc.height);drawMatrix(arena,{x:0,y:0});drawMatrix(player.matrix,player.pos)}
function collide(arena,player){const m=player.matrix,o=player.pos;for(let y=0;y<m.length;y++)for(let x=0;x<m[y].length;x++)if(m[y][x]&& (arena[y+o.y]&&arena[y+o.y][x+o.x])!==0)return true;return false}
function merge(arena,player){player.matrix.forEach((row,y)=>row.forEach((v,x)=>{if(v)arena[y+player.pos.y][x+player.pos.x]=v}))}
function rotate(matrix){for(let y=0;y<matrix.length;y++)for(let x=0;x<y;x++){[matrix[x][y],matrix[y][x]]=[matrix[y][x],matrix[x][y]]}matrix.forEach(row=>row.reverse())}
function playerDrop(){player.pos.y++;if(collide(arena,player)){player.pos.y--;merge(arena,player);playerReset();}}
function playerMove(dir){player.pos.x+=dir;if(collide(arena,player))player.pos.x-=dir}
function playerReset(){player.matrix=pieces[Math.floor(Math.random()*pieces.length)];player.pos.y=0;player.pos.x=(COLS-Math.max(...player.matrix.map(r=>r.length))|0)/2}
const player={pos:{x:0,y:0},matrix:pieces[0]};playerReset();
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')playerMove(-1);if(e.key==='ArrowRight')playerMove(1);if(e.key==='ArrowDown')playerDrop();if(e.key==='ArrowUp')rotate(player.matrix)});
setInterval(()=>{playerDrop();draw()},500);
