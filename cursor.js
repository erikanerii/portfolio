(function(){
  if(matchMedia('(pointer:coarse)').matches)return;
  var dot=document.createElement('div');dot.className='dot';dot.setAttribute('aria-hidden','true');
  document.body.appendChild(dot);
  var ease=matchMedia('(prefers-reduced-motion:reduce)').matches?1:.14;
  var tx=-100,ty=-100,x=-100,y=-100;
  document.addEventListener('pointermove',function(e){
    tx=e.clientX-13;ty=e.clientY-13;
    // hide the dot where the "Read case study" cursor takes over
    dot.style.opacity=(e.target.closest&&e.target.closest('.dir li,.stage'))?0:'';
  });
  document.addEventListener('mouseleave',function(){dot.style.opacity=0});
  document.addEventListener('mouseenter',function(){dot.style.opacity=''});
  (function loop(){x+=(tx-x)*ease;y+=(ty-y)*ease;dot.style.transform='translate('+x+'px,'+y+'px)';requestAnimationFrame(loop)})();
})();
