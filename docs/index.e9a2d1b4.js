let e=0;const t=[document.getElementById("logoSection"),document.getElementById("aboutSection"),document.getElementById("servicesSection1"),document.getElementById("servicesSection2"),document.getElementById("contactSection")];let n=t.map((e=>({offsetTop:e.offsetTop,clientHeight:e.clientHeight})));document.getElementById("scroll-button").addEventListener("click",(()=>{e===t.length-1&&t[0].scrollIntoView({behavior:"smooth"}),t[e+1].scrollIntoView({behavior:"smooth"}),e+=1}));document.getElementById("menuIcon").addEventListener("click",(()=>{var e=document.getElementById("mobileMenuWrapper"),t=document.getElementById("bg");document.getElementsByClassName("main-inner");"flex"===e.style.display?(e.style.display="none",t.style.zIndex=0):(e.style.display="flex",t.style.zIndex=1)}));document.addEventListener("scroll",((e,t)=>{let n=null;return(...o)=>{window.clearTimeout(n),n=window.setTimeout((()=>{e.apply(null,o)}),t)}})((function(){const t=window.scrollY;document.getElementById("scroll-button"),n.forEach(((o,l)=>{t>=o.offsetTop&&t<=o.offsetTop+o.clientHeight&&(e=l),e===n.length-1?document.getElementById("arrow-icon").className="arrow-up center":(console.log(e,"there"),document.getElementById("arrow-icon").className="arrow-down center")}))}),500));