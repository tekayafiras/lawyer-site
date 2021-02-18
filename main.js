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

open.addEventListener('click',function(){
    document.querySelector('.mobile-menu').style.transform='translateX('+0;
});

close.addEventListener('click',function(){
    document.querySelector('.mobile-menu').style.transform='translateX('+275+'px';
})