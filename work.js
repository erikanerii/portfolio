if(typeof P==='undefined'){document.getElementById('dir').innerHTML='<li>projects.js is missing. Put it in the same folder as work.html.</li>';throw new Error('projects.js not found');}
var cats=['All','Brand','Marketing','Build'],cur='All',sel=P[0];
var dir=document.getElementById('dir'),stage=document.getElementById('stage'),side=document.getElementById('side');
function show(p){
  sel=p;
  [stage,side,dir].forEach(function(el){el.style.setProperty('--pc',p.col)});
  stage.innerHTML='<div class="pimg"><div class="blob"></div></div><h2></h2><b></b><p></p>';
  stage.querySelector('h2').textContent=p.n;
  stage.querySelector('b').textContent=p.r+' / '+p.y;
  stage.querySelector('p').textContent=p.d;
  side.innerHTML='<div class="card a"><span class="lab"></span></div><div class="card b"><span class="lab"></span></div>';
  side.children[0].firstChild.textContent=p.m;
  side.children[1].firstChild.textContent=p.n;
  loadProjImg(p,'One',stage.querySelector('.pimg'));
  loadProjImg(p,'Two',side.children[0]);
  loadProjImg(p,'Three',side.children[1]);
  [].forEach.call(dir.children,function(li){li.classList.toggle('on',li.dataset.n===p.n)});
}
function render(){
  var list=P.filter(function(p){return cur==='All'||p.c===cur});
  dir.innerHTML='';
  list.forEach(function(p){
    var li=document.createElement('li');li.dataset.n=p.n;
    li.innerHTML='<span></span><small></small>';
    li.firstChild.textContent=p.n;li.lastChild.textContent=p.c;
    li.addEventListener('mouseenter',function(){show(p)});
    li.addEventListener('click',function(){if(matchMedia('(pointer:coarse)').matches&&sel!==p){show(p)}else{go(p)}});
    dir.appendChild(li);
  });
  document.getElementById('count').textContent=list.length;
  show(list.indexOf(sel)>-1?sel:list[0]);
}
function go(p){location.href='caseStudy.html?p='+encodeURIComponent(p.s)}
stage.addEventListener('click',function(){go(sel)});
var f=document.getElementById('filters');
function setFilter(c){
  cur=c;
  [].forEach.call(f.children,function(x){x.classList.toggle('on',x.textContent===c)});
  [].forEach.call(document.querySelectorAll('.words button'),function(x){x.classList.toggle('on',x.dataset.f===c)});
  render();
}
document.querySelectorAll('.words button').forEach(function(b){
  b.addEventListener('click',function(){
    setFilter(cur===b.dataset.f?'All':b.dataset.f);
    document.getElementById('work').scrollIntoView({behavior:'smooth'});
  });
});
cats.forEach(function(c){
  var b=document.createElement('button');b.textContent=c;
  b.className=c===cur?'on':'';
  b.onclick=function(){setFilter(c)};
  f.appendChild(b);
});
render();

// Warmth slider tints the page background
document.getElementById('sun').addEventListener('input',function(e){
  var v=e.target.value/100;
  document.body.style.background='color-mix(in srgb, #ffe27a '+Math.round(v*45)+'%, var(--bg))';
});

// ---- Hero dot field: dots scatter away from the cursor ----
(function(){
  var hero=document.getElementById('wkhero'),cv=document.getElementById('dots'),ctx=cv.getContext('2d');
  var PAL=['#ff4d6d','#ff9f1c','#ffd60a','#2ec27e','#00b4d8','#5b3df5','#e040fb'];
  var D=[],W=0,H=0,mx=-999,my=-999,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function size(){
    var r=hero.getBoundingClientRect(),d=window.devicePixelRatio||1;
    W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);D=[];
    for(var y=16,j=0;y<H;y+=30,j++)for(var x=16,i=0;x<W;x+=30,i++)D.push({x:x,y:y,dx:0,dy:0,vx:0,vy:0,c:PAL[(i+j)%PAL.length]});
    draw();
  }
  function draw(){
    ctx.clearRect(0,0,W,H);ctx.globalAlpha=.6;
    D.forEach(function(p){ctx.fillStyle=p.c;ctx.beginPath();ctx.arc(p.x+p.dx,p.y+p.dy,3.2,0,6.283);ctx.fill()});
  }
  function tick(){
    D.forEach(function(p){
      var ax=p.x+p.dx-mx,ay=p.y+p.dy-my,d=Math.sqrt(ax*ax+ay*ay);
      if(d<120&&d>0){var f=(1-d/120)*6;p.vx+=ax/d*f;p.vy+=ay/d*f}
      p.vx+=-p.dx*.06;p.vy+=-p.dy*.06;p.vx*=.82;p.vy*=.82;p.dx+=p.vx;p.dy+=p.vy;
    });
    draw();requestAnimationFrame(tick);
  }
  hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
  hero.addEventListener('pointerleave',function(){mx=my=-999});
  window.addEventListener('resize',size);
  size();if(!still)tick();
})();

// ---- "Read case study" cursor ----
(function(){
  var el=document.getElementById('csCursor');
  if(!el||matchMedia('(pointer:coarse)').matches)return;
  var tx=0,ty=0,x=0,y=0,k=0,t=0;
  document.addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;t=(e.target.closest&&e.target.closest('.dir li,.stage'))?1:0});
  document.addEventListener('mouseleave',function(){t=0});
  (function loop(){
    x+=(tx-x)*.2;y+=(ty-y)*.2;k+=(t-k)*.18;
    el.style.transform='translate('+x+'px,'+y+'px) translate(-50%,-50%) scale('+k+') rotate('+((1-k)*-12)+'deg)';
    el.style.background=sel.col;
    requestAnimationFrame(loop);
  })();
})();
