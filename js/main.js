
const sections=document.querySelectorAll('.section');
const io=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('show');
 });
},{threshold:0.15});
sections.forEach(s=>io.observe(s));
