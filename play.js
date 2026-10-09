// ---- Gallery (edit titles here; images live in the "fun web" folder) ----
var IMG_DIRS=['portfolio images/fun web/','fun web/'];
var SETS=[
 {cat:'Graphics',label:'Graphic',names:['graphicOne','graphicTwo','graphicThree','graphicFour','graphicFive']},
 {cat:'Photography',label:'Photo',names:['photoOne','photoTwo','photoThree','photoFour','photoFive']},
 {cat:'UI Concepts',label:'UI concept',names:['uiOne','uiTwo','uiThree','uiFour']}
];
var COLS=[['#e040fb','#ff9f1c'],['#6f4e37','#c8a27a'],['#00b4d8','#5b3df5'],['#ff4d6d','#ff9f1c'],['#2ec27e','#00b4d8']];
var G=[];
SETS.forEach(function(s){s.names.forEach(function(n,i){G.push({t:s.label+' 0'+(i+1),cat:s.cat,name:n,col:COLS[i%COLS.length]})})});
var EXTS=['png','jpg','jpeg','PNG','JPG','JPEG','webp','WEBP'];
var cats=['Graphics','Photography','UI Concepts'],on={};
var grid=document.getElementById('grid'),fl=document.getElementById('filters'),lb=document.getElementById('lb');

function loadImg(box,g){
  var c=[];IMG_DIRS.forEach(function(d){EXTS.forEach(function(x){c.push(encodeURI(d+g.name+'.'+x))})});
  var i=0,im=document.createElement('img');im.alt=g.t;im.loading='lazy';
  im.onload=function(){box.classList.add('has-img')};
  im.onerror=function(){i++;if(i<c.length){im.src=c[i]}else{im.remove()}};
  im.src=c[0];box.appendChild(im);
}
function openLB(src,alt){lb.innerHTML='';var im=new Image();im.src=src;im.alt=alt;lb.appendChild(im);lb.classList.add('on')}
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});

function render(){
  var any=cats.some(function(c){return on[c]});
  var list=G.filter(function(g){return !any||on[g.cat]});
  grid.innerHTML='';
  list.forEach(function(g){
    var f=document.createElement('figure');f.className='pcard';
    var m=document.createElement('div');m.className='media';
    m.style.background='linear-gradient(135deg,'+g.col[0]+','+g.col[1]+')';
    var s=document.createElement('span');s.textContent=g.cat;m.appendChild(s);
    loadImg(m,g);
    m.addEventListener('click',function(){var im=m.querySelector('img');if(m.classList.contains('has-img')&&im)openLB(im.currentSrc||im.src,g.t)});
    var c=document.createElement('figcaption'),a=document.createElement('span'),b=document.createElement('small');
    a.textContent=g.t;b.textContent=g.cat;c.appendChild(a);c.appendChild(b);
    f.appendChild(m);f.appendChild(c);grid.appendChild(f);
  });
}
cats.forEach(function(c){
  var l=document.createElement('label'),i=document.createElement('input'),t=document.createElement('span');
  i.type='checkbox';t.textContent=c;
  i.addEventListener('change',function(){on[c]=i.checked;render()});
  l.appendChild(i);l.appendChild(t);fl.appendChild(l);
});
render();

// ---- Draggable stickers in the hero ----
var hero=document.getElementById('hero2'),z=10;
var SV={
 cup:'<svg viewBox="0 0 100 100"><g class="steam"><path d="M34 26q-6-8 0-14"/><path d="M50 26q-6-8 0-14"/><path d="M66 26q-6-8 0-14"/></g><path d="M18 40h56v26a22 22 0 0 1-22 22H40a22 22 0 0 1-22-22z" fill="COL"/><path d="M74 48h6a10 10 0 0 1 0 20h-6" fill="none" stroke="COL" stroke-width="7"/></svg>',
 sparkle:'<svg viewBox="0 0 100 100"><path d="M50 5C53 35 65 47 95 50 65 53 53 65 50 95 47 65 35 53 5 50 35 47 47 35 50 5Z" fill="COL"/></svg>',
 bean:'<svg viewBox="0 0 100 100"><g transform="rotate(30 50 50)"><ellipse cx="50" cy="50" rx="30" ry="42" fill="COL"/><path d="M42 14C62 36 40 64 58 86" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/></g></svg>',
 blob:'<svg viewBox="0 0 100 100"><path d="M50 8c20-4 42 12 42 36s-14 48-40 48S6 74 8 48 30 12 50 8z" fill="COL"/></svg>',
 star:'<svg viewBox="0 0 100 100"><path d="M50 10l12 26 28 4-20 20 5 28-25-14-25 14 5-28L10 40l28-4z" fill="COL" stroke="COL" stroke-width="9" stroke-linejoin="round"/></svg>',
 cursor:'<svg viewBox="0 0 100 100"><path d="M18 8l60 36-26 6 16 30-12 6-16-30-22 18z" fill="COL" stroke="#fff" stroke-width="5" stroke-linejoin="round"/></svg>'
};
var S=[
 {k:'cup',x:58,y:24,w:150,r:-8,c:'#ff9f1c'},{k:'sparkle',x:10,y:58,w:90,r:10,c:'#ffd60a'},
 {k:'bean',x:38,y:62,w:84,r:-20,c:'#6f4e37'},{k:'blob',x:78,y:58,w:130,r:6,c:'#e040fb'},
 {k:'star',x:30,y:40,w:70,r:14,c:'#00b4d8'},{k:'cursor',x:50,y:50,w:64,r:-12,c:'#141414'},
 {k:'sparkle',x:84,y:18,w:60,r:-6,c:'#2ec27e'}
];
S.forEach(function(s){
  var el=document.createElement('div');el.className='stk';
  el.innerHTML=SV[s.k].replace(/COL/g,s.c);
  el.style.cssText='left:'+s.x+'%;top:'+s.y+'%;width:'+s.w+'px;--r:'+s.r+'deg';
  var ox=0,oy=0,drag=false;
  el.addEventListener('pointerdown',function(e){
    drag=true;el.setPointerCapture(e.pointerId);
    var r=el.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;
    el.classList.remove('drop');el.classList.add('drag');el.style.zIndex=++z;
  });
  el.addEventListener('pointermove',function(e){
    if(!drag)return;
    var h=hero.getBoundingClientRect();
    var x=Math.min(Math.max(e.clientX-h.left-ox,-10),h.width-el.offsetWidth+10);
    var y=Math.min(Math.max(e.clientY-h.top-oy,-10),h.height-el.offsetHeight+10);
    el.style.left=x+'px';el.style.top=y+'px';
  });
  function up(){if(!drag)return;drag=false;el.classList.remove('drag');void el.offsetWidth;el.classList.add('drop')}
  el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
  hero.appendChild(el);
});
