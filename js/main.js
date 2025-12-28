
const sections=document.querySelectorAll('.section');
const io=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('show');
 });
},{threshold:0.15});
sections.forEach(s=>io.observe(s));
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
