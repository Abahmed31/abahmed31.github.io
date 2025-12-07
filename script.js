// script.js — minimal, robust mobile nav toggle
(function(){
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.mobile-nav');

  function closeMobile(){
    if(mobile) mobile.style.display = 'none';
    if(btn) btn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  function openMobile(){
    if(mobile) mobile.style.display = 'block';
    if(btn) btn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }

  if(btn && mobile){
    btn.addEventListener('click', ()=>{
      const open = mobile.style.display === 'block';
      if(open) closeMobile(); else openMobile();
    });
    mobile.addEventListener('click', (e)=>{
      if(e.target.tagName === 'A') closeMobile();
    });
    window.addEventListener('resize', ()=>{ if(window.innerWidth > 768) closeMobile(); });
  }
})();
