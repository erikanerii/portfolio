if(typeof P==='undefined'){document.getElementById('cs').textContent='projects.js is missing. Put it in the same folder as caseStudy.html.';throw new Error('projects.js not found');}
var slug=new URLSearchParams(location.search).get('p');
var idx=0;P.forEach(function(p,i){if(p.s===slug)idx=i});
var p=P[idx],nx=P[(idx+1)%P.length];
document.title='Erika Neri | '+p.n;

var root=document.getElementById('cs');
root.innerHTML=
 '<a class="back" href="work.html">&larr; all work</a>'+
 '<h1 style="color:'+p.col+'">'+p.n+'</h1>'+
 '<div class="meta"><div><div class="lbl">ROLE</div><div>'+p.r+'</div></div><div><div class="lbl">DATES</div><div>'+p.y+'</div></div><div><div class="lbl">CATEGORY</div><div>'+p.c+'</div></div><div><div class="lbl">TOOLS</div><div>'+p.tools+'</div></div></div>'+
 '<div class="shot hero" data-n="One"></div>'+
 '<div class="two"><section><div class="lbl">OVERVIEW</div><p>'+p.d+'</p><div class="lbl" style="margin-top:28px">THE CHALLENGE</div><p>'+p.ch+'</p></section>'+
 '<section><div class="lbl">WHAT I DID</div><ul>'+p.b.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></section></div>'+
 '<div class="pair"><div class="shot" data-n="Two"></div><div class="shot" data-n="Three"></div></div>'+
 '<div class="lbl">RESULTS</div><div class="stats">'+p.st.map(function(x){return '<div><b style="color:'+p.col+'">'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join('')+'</div>'+
 '<div class="refl"><div class="lbl">REFLECTION</div><p>'+p.rf+'</p></div>'+
 '<a class="next" href="caseStudy.html?p='+nx.s+'">Next: '+nx.n+' &rarr;</a>';

// Load project images: tries png, jpg, jpeg, webp and both lowercase/Capitalized file names
function shot(box,n){
  var cand=projImgCandidates(p,n),i=0,im=new Image();
  im.alt=p.n+' image '+n;
  im.onload=function(){box.innerHTML='';box.appendChild(im)};
  im.onerror=function(){i++;if(i<cand.length){im.src=cand[i]}else{empty()}};
  function empty(){
    box.classList.add('empty');if(!p.folder)box.classList.add('soon');
    box.style.background='linear-gradient(135deg,'+p.col+','+p.col+'55)';
    box.innerHTML='<span></span>';
    box.firstChild.textContent=p.folder?missingNote(p,n):'coming soon';
  }
  if(cand.length){im.src=cand[0]}else{empty()}
}
document.querySelectorAll('.shot').forEach(function(b){shot(b,b.dataset.n)});
