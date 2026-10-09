var COLORS=['#ff4d6d','#ff9f1c','#ffd60a','#2ec27e','#00b4d8','#5b3df5','#e040fb','#ff6b35','#06d6a0'];
document.querySelectorAll('.row').forEach(function(row,ri){
  row.dataset.t.split('').forEach(function(ch,i){
    var s=document.createElement('span');
    s.textContent=ch;
    s.style.setProperty('--c',COLORS[(i*2+ri*4)%COLORS.length]);
    s.style.setProperty('--r',((i%2?1:-1)*(2+i))+'deg');
    s.addEventListener('click',function(){
      s.style.setProperty('--c',COLORS[Math.floor(Math.random()*COLORS.length)]);
      s.classList.remove('pop');void s.offsetWidth;s.classList.add('pop');
    });
    row.appendChild(s);
  });
});
var letters=[].slice.call(document.querySelectorAll('.row span'));
var hero=document.getElementById('hero');
function near(e){
  letters.forEach(function(l){
    var b=l.getBoundingClientRect();
    var dx=e.clientX-(b.left+b.width/2),dy=e.clientY-(b.top+b.height/2);
    var d=Math.sqrt(dx*dx+dy*dy),k=Math.max(0,1-d/(b.width*1.3));
    l.style.setProperty('--s',1+k*.22);
    l.style.setProperty('--y',(-k*14)+'px');
  });
}
hero.addEventListener('pointermove',near);
hero.addEventListener('pointerleave',function(){letters.forEach(function(l){l.style.setProperty('--s',1);l.style.setProperty('--y','0px')})});
