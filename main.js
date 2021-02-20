const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nav = document.querySelector('.carousel-nav');
const navbutton = Array.from(nav.children);

const slidesize = slides[0].getBoundingClientRect().width; //  nchoufou l width w height w hajet okhra men screen ma7toutin fo object

// bech n7ottou slides next to each other

slides[0].style.left = 0;
slides[1].style.left = slidesize*1 +'px';
slides[2].style.left = slidesize*2 +'px';

const movetoslide = (track, currentslide, targetslide)=>{
    track.style.transform = 'translateX(-'+targetslide.style.left;
    currentslide.classList.remove('current');
    targetslide.classList.add('current');
}




nav.addEventListener('click', e =>{
    //console.log(e.target.closest('button'));
    const targetbutton = e.target.closest('button');

    if(!targetbutton) return;

    const currentslide = track.querySelector('.current');
    const currentbutton = nav.querySelector('.current');
    const targetindex = navbutton.findIndex(navbutton => navbutton === targetbutton);
    const targetslide = slides[targetindex];
    movetoslide(track, currentslide, targetslide);

    currentbutton.classList.remove('current');
    targetbutton.classList.add('current');
});


const open = document.querySelector('.open');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');

open.addEventListener('click',function(){
    mobileMenu.style.transform='translateX('+0;
    
});

close.addEventListener('click',function(){
    mobileMenu.style.transform='translateX('+275+'px';
    
});







const items = document.querySelectorAll('.hide');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
        item.classList.add('show');  // ken element yodhher fil page yetzedlou l class "show"
      }
  });


// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);    // nzidou l class "show" fi css f element li nhebou aalih expl

;