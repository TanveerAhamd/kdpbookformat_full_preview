
document.addEventListener('DOMContentLoaded', function(){ AOS.init({duration:800, once:true}); });
// Simple lazy loading helper (images with data-src)
document.addEventListener('DOMContentLoaded', function(){
  const imgs = document.querySelectorAll('img[data-src]');
  const obs = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        obs.unobserve(img);
      }
    });
  }, {rootMargin:'50px'});
  imgs.forEach(i=>obs.observe(i));
});
