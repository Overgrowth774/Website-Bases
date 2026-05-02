const cc=document.getElementById('checkers'),c2=cc.getContext('2d');const S=60;for(let r=0;r<8;r++)for(let f=0;f<8;f++){c2.fillStyle=((r+f)%2)?'#b58863':'#f0d9b5';c2.fillRect(f*S,r*S,S,S)}
