/* Aesthetic Erica Cucato — site behaviour (no dependencies) */
(function(){
  var burger=document.getElementById('burger'),menu=document.getElementById('mobileMenu');
  if(burger&&menu){
  burger.addEventListener('click',function(){var open=menu.hasAttribute('hidden');if(open){menu.removeAttribute('hidden')}else{menu.setAttribute('hidden','')}burger.setAttribute('aria-expanded',open?'true':'false');burger.setAttribute('aria-label',open?'Close menu':'Open menu')});
  menu.querySelectorAll('[data-close]').forEach(function(a){a.addEventListener('click',function(){menu.setAttribute('hidden','');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open menu')})});
  }


  var feat=document.getElementById('feat'),ft=document.getElementById('featToggle');
  if(feat&&ft)ft.addEventListener('click',function(){var o=feat.classList.toggle('open');ft.setAttribute('aria-expanded',o?'true':'false')});
  var tabs=document.querySelectorAll('.tab'),cards=document.querySelectorAll('.svc');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    var cat=t.getAttribute('data-cat');
    tabs.forEach(function(o){var on=o===t;o.classList.toggle('active',on);o.setAttribute('aria-selected',on?'true':'false')});
    var i=0;cards.forEach(function(c){
      var show=cat==='all'||c.getAttribute('data-cat')===cat;
      if(show){c.removeAttribute('hidden');c.classList.remove('pop');void c.offsetWidth;c.style.animationDelay=(i++*90)+'ms';c.classList.add('pop')}else{c.setAttribute('hidden','')}
    });
  })});

  var d=new Date().getDay(),row=document.querySelector('.hr[data-day="'+d+'"]');if(row)row.classList.add('today');
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();

  if(!(window.CSS&&CSS.supports&&CSS.supports('animation-timeline','view()'))&&'IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var els=document.querySelectorAll('.rv,.rvz');
    els.forEach(function(e){e.style.opacity='0';e.style.transform=e.classList.contains('rvz')?'scale(.94)':'translateY(46px)';e.style.transition='opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)'});
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.style.opacity='1';x.target.style.transform='none';io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }
})();

/* ---------- Cookie consent + optional analytics ---------- */
(function(){
  var cfg=window.SITE_CONFIG||{};
  var id=(cfg.analyticsId||'').trim();
  var KEY='ec-consent-v1', MAX_AGE=1000*60*60*24*365; // ask again after 12 months
  var banner=document.getElementById('cookieBanner');
  var settingsBtn=document.getElementById('cookieSettings');
  var preview=/[?&]cookies=preview/.test(location.search);

  function read(){try{var v=JSON.parse(localStorage.getItem(KEY));if(v&&Date.now()-v.t<MAX_AGE)return v}catch(e){}return null}
  function save(ok){try{localStorage.setItem(KEY,JSON.stringify({analytics:ok,t:Date.now()}))}catch(e){}}
  function show(){banner.removeAttribute('hidden')}
  function hide(){banner.setAttribute('hidden','')}

  function loadAnalytics(){
    if(!/^G-[A-Z0-9]+$/.test(id)||window.__gaLoaded)return;
    window.__gaLoaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments)};
    gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
    gtag('js',new Date());
    gtag('config',id);
    var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);
    document.head.appendChild(s);
  }
  function clearAnalyticsCookies(){
    document.cookie.split(';').forEach(function(c){
      var n=c.split('=')[0].trim();
      if(/^_ga/.test(n)){
        var host=location.hostname, parts=host.split('.');
        for(var i=0;i<parts.length;i++){
          var d=parts.slice(i).join('.');
          document.cookie=n+'=; Max-Age=0; path=/; domain=.'+d;
        }
        document.cookie=n+'=; Max-Age=0; path=/';
      }
    });
  }

  // Only ask when analytics is actually configured (or in preview mode).
  if(!id&&!preview){if(settingsBtn)settingsBtn.parentNode.removeChild(settingsBtn);return}

  var c=read();
  if(c&&!preview){if(c.analytics)loadAnalytics()}else{show()}

  document.getElementById('ccAccept').addEventListener('click',function(){save(true);hide();loadAnalytics()});
  document.getElementById('ccReject').addEventListener('click',function(){
    var had=window.__gaLoaded;save(false);hide();clearAnalyticsCookies();
    if(had){location.reload()}
  });
  if(settingsBtn)settingsBtn.addEventListener('click',show);
})();
