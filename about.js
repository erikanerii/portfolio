var PAL=['#ff4d6d','#ff9f1c','#ffd60a','#2ec27e','#00b4d8','#5b3df5','#e040fb'];

// Headline: letters swell and light up near the cursor
var letters=[];
document.querySelectorAll('.wave').forEach(function(w,wi){
  w.setAttribute('aria-label',w.dataset.t);
  w.dataset.t.split('').forEach(function(ch,i){
    var s=document.createElement('i');s.textContent=ch;s.setAttribute('aria-hidden','true');
    s._a=wi===0;s._i=i;w.appendChild(s);letters.push(s);
  });
});
var h1=document.querySelector('h1');
h1.addEventListener('pointermove',function(e){
  letters.forEach(function(l){
    var b=l.getBoundingClientRect();
    var dx=e.clientX-(b.left+b.width/2),dy=e.clientY-(b.top+b.height/2);
    var k=Math.max(0,1-Math.sqrt(dx*dx+dy*dy)/110);
    l.style.setProperty('--s',1+k*.3);
    l.style.setProperty('--y',(-k*14)+'px');
    l.style.color=k>.35?PAL[l._i%PAL.length]:'';
  });
});
h1.addEventListener('pointerleave',function(){letters.forEach(function(l){l.style.setProperty('--s',1);l.style.setProperty('--y','0px');l.style.color=''})});

// Rotating "currently into" word
var words=['coffee','tech','design','whimsy','sleek interfaces','interactive things'],wi=0,fl=document.getElementById('flip');
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
  setInterval(function(){
    fl.classList.add('out');
    setTimeout(function(){wi=(wi+1)%words.length;fl.textContent=words[wi];fl.classList.remove('out')},250);
  },2000);
}

// Draggable polaroid
var po=document.getElementById('polaroid'),ox=0,oy=0,dr=false;
po.addEventListener('pointerdown',function(e){
  var r=po.getBoundingClientRect(),p=po.offsetParent.getBoundingClientRect();
  dr=true;po.setPointerCapture(e.pointerId);po.classList.add('drag');
  ox=e.clientX-r.left;oy=e.clientY-r.top;
  po.style.left=(r.left-p.left)+'px';po.style.top=(r.top-p.top)+'px';
  if(getComputedStyle(po).position==='relative'){po.style.position='absolute'}
});
po.addEventListener('pointermove',function(e){
  if(!dr)return;var p=po.offsetParent.getBoundingClientRect();
  po.style.left=(e.clientX-p.left-ox)+'px';po.style.top=(e.clientY-p.top-oy)+'px';
});
function up(){dr=false;po.classList.remove('drag')}
po.addEventListener('pointerup',up);po.addEventListener('pointercancel',up);

// Previously list
var PREV=[
 ['Brown Harris Stevens','Administrative & Creative Assistant','MAR-SEP 2026'],
 ['Teso Group','Design Intern','MAY-JUL 2026'],
 ['NY Jobs CEO Council','Social Media Marketing Intern','OCT 2025-MAR 2026'],
 ['SAL Consulting','UX/UI & Marketing Intern','AUG-OCT 2025'],
 ['Cy Ventures','Product Strategy Summer Analyst','JUL-SEP 2025'],
 ['Aako','AR Spatial Marketing Intern','JUL-AUG 2025'],
 ['Jammy Chat','Marketing + App Developer Intern','DEC 2024-FEB 2025'],
 ['Indochina Starfish Foundation','Design Engineering Intern','DEC 2024-APR 2025'],
 ['Research Foundation of CUNY','IT Intern at PS20','MAR 2024-APR 2025'],
 ['Olive Young & Flower Knows','Brand Ambassador','MAY 2024-MAY 2026']
];
var pv=document.getElementById('prev');
PREV.forEach(function(r){
  var li=document.createElement('li'),d=document.createElement('div'),b=document.createElement('b'),e=document.createElement('em'),s=document.createElement('small');
  b.textContent=r[0];e.textContent=r[1];s.textContent=r[2];
  d.appendChild(b);d.appendChild(e);li.appendChild(d);li.appendChild(s);pv.appendChild(li);
});

// Skill chips
['Figma','Photoshop','Illustrator','React','JavaScript','Python','HubSpot','Google Analytics','Mailchimp','Canva','WordPress','Airtable'].forEach(function(t,i){
  var c=document.createElement('span');c.textContent=t;c.style.setProperty('--c',PAL[i%PAL.length]);
  document.getElementById('chips').appendChild(c);
});

// Optional: paste a Spotify embed link (playlist or track) to show a live player, e.g.
// 'https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID'
var SPOTIFY_EMBED='';
if(SPOTIFY_EMBED.indexOf('https://open.spotify.com/embed/')===0){
  var fr=document.createElement('iframe');fr.src=SPOTIFY_EMBED;fr.loading='lazy';
  fr.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
  document.getElementById('spotEmbed').appendChild(fr);
}

// Polaroid photo: looks in "portfolio images/about me" or "about me"
(function(){
  var ph=document.querySelector('.ph'),c=[],i=0,im=new Image();
  ['portfolio images/about me/','about me/'].forEach(function(d){['me.JPG','me.jpg','me.jpeg','me.png','me.PNG'].forEach(function(n){c.push(encodeURI(d+n))})});
  im.alt='Erika';
  im.onload=function(){ph.insertBefore(im,ph.firstChild);ph.classList.add('loaded')};
  im.onerror=function(){i++;if(i<c.length)im.src=c[i]};
  im.src=c[0];
})();
