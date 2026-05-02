const bctx=document.getElementById('bb').getContext('2d');const size=6;const cell=60;let grid=[];const colors=['#f44336','#ffeb3b','#4caf50','#2196f3','#9c27b0'];for(let y=0;y<size;y++){grid[y]=[];for(let x=0;x<size;x++)grid[y][x]=Math.floor(Math.random()*colors.length)}
function draw(){bctx.clearRect(0,0,360,360);for(let y=0;y<size;y++)for(let x=0;x<size;x++){bctx.fillStyle=colors[grid[y][x]];bctx.fillRect(x*cell,y*cell,cell-2,cell-2)}}
draw();
