
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
const images = [
  "../images/goku/goku-ssj2-shenlong-img1.jpeg",
  "../images/goku/goku-ssj2-shenlong-img2.jpeg",
  "../images/goku/goku-ssj2-shenlong-img3.jpeg"
];

let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

if (carouselImage && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.style.opacity = 0;
    setTimeout(() => {
      carouselImage.src = images[currentIndex];
      carouselImage.style.opacity = 1;
    }, 200);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.style.opacity = 0;
    setTimeout(() => {
      carouselImage.src = images[currentIndex];
      carouselImage.style.opacity = 1;
    }, 200);
  });
}
