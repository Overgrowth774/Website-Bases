// Chess skeleton: draws board; piece logic left as exercise for base customization
const ch=document.getElementById('chess'),cctx=ch.getContext('2d');const sq=60;for(let r=0;r<8;r++)for(let f=0;f<8;f++){cctx.fillStyle=((r+f)%2)?'#e6ccb2':'#6b3e1e';cctx.fillRect(f*sq,r*sq,sq,sq)}
