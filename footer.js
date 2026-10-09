(function(){
  var PAL=['#ff4d6d','#ff9f1c','#ffd60a','#2ec27e','#00b4d8','#5b3df5','#e040fb','#ff6b35','#06d6a0'];
  var EMAIL='erikanerii17@gmail.com',UPDATED='Oct 8, 2026';
  var IC={
   cup:'<path d="M18 40h56v26a22 22 0 0 1-22 22H40a22 22 0 0 1-22-22z"/><path d="M74 48h6a10 10 0 0 1 0 20h-6" fill="none" stroke="#fff" stroke-width="7"/>',
   camera:'<rect x="10" y="30" width="80" height="52" rx="10"/><rect x="34" y="20" width="32" height="14" rx="5"/><circle cx="50" cy="56" r="16" style="fill:var(--c)"/>',
   note:'<ellipse cx="32" cy="76" rx="15" ry="11"/><ellipse cx="72" cy="66" rx="15" ry="11"/><path d="M45 76V24l40-10v52" fill="none" stroke="#fff" stroke-width="7"/>',
   mountain:'<path d="M5 85L38 28l16 24 14-18 27 51z"/>',
   laptop:'<rect x="18" y="22" width="64" height="42" rx="5"/><path d="M6 72h88l-6 10H12z"/>',
   sparkle:'<path d="M50 5C53 35 65 47 95 50 65 53 53 65 50 95 47 65 35 53 5 50 35 47 47 35 50 5Z"/>'
  };
  var T=[['cup','#ff9f1c',0,6,-12],['camera','#e040fb',16,34,8],['note','#00b4d8',31,2,-6],['mountain','#2ec27e',46,30,14],['laptop','#5b3df5',60,8,-9],['sparkle','#ff4d6d',74,36,10]];
  var f=document.createElement('footer');f.className='ft';
  f.innerHTML=
   '<div class="ft-handle" aria-label="@erikaneri"></div>'+
   '<div class="ft-pile"></div>'+
   '<div class="ft-meta">Last updated '+UPDATED+'<br>With &lt;3, &copy;Erika Neri<br><button type="button" id="ftTop">back to top &uarr;</button></div>'+
   '<div class="ft-links"><a href="mailto:'+EMAIL+'">Email</a><a href="https://www.linkedin.com/in/erikaanerii/" target="_blank" rel="noopener">LinkedIn</a><a href="https://www.instagram.com/irenakire/" target="_blank" rel="noopener">Instagram</a><button type="button" id="ftCopy">copy email</button></div>'+
   '<div class="ft-thanks" aria-label="Thanks for stopping by! Always happy to chat"></div>';
  var h=f.querySelector('.ft-handle');
  '@erikaneri'.split('').forEach(function(ch,i){
    var s=document.createElement('span');s.textContent=ch;s.setAttribute('aria-hidden','true');
    s.style.setProperty('--c',PAL[(i*2)%PAL.length]);h.appendChild(s);
  });
  var th=f.querySelector('.ft-thanks');
  ['Thanks for stopping by!','Always happy to chat'].forEach(function(line,li){
    line.split('').forEach(function(ch,i){
      var s=document.createElement('span');s.textContent=ch===' '?'\u00a0':ch;s.setAttribute('aria-hidden','true');
      s.style.setProperty('--c',PAL[(i*2+li*4)%PAL.length]);th.appendChild(s);
    });
    if(li===0)th.appendChild(document.createElement('br'));
  });
  var pile=f.querySelector('.ft-pile'),z=1;
  T.forEach(function(t){
    var d=document.createElement('div');d.className='tile';d.setAttribute('aria-hidden','true');
    d.style.cssText='--c:'+t[1]+';--r:'+t[4]+'deg;left:'+t[2]+'%;bottom:'+t[3]+'%';
    d.innerHTML='<svg viewBox="0 0 100 100">'+IC[t[0]]+'</svg>';
    d.addEventListener('click',function(){d.style.zIndex=++z;d.classList.remove('pop');void d.offsetWidth;d.classList.add('pop')});
    pile.appendChild(d);
  });
  document.body.appendChild(f);
  var cp=document.getElementById('ftCopy');
  cp.addEventListener('click',function(){
    function done(){cp.textContent='copied!';setTimeout(function(){cp.textContent='copy email'},1600)}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(EMAIL).then(done,done)}else{done()}
  });
  document.getElementById('ftTop').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
})();
