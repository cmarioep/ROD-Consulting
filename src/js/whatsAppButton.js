const about = document.getElementById('about');
const whatsAppButtom = document.getElementById('whatsAppButtom');


const options = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.25
};


const isInViewport = (target) => {
    const isIntersecting = target[0].isIntersecting;
    return isIntersecting;
}


const aboutIntersection = (target) => {

    if (isInViewport(target)) {
        whatsAppButtom.classList.add('whatsAppButtom--visible');
    }

}


const onScrollHandler = () => {
    if(window.scrollY < 260) {
        whatsAppButtom.classList.remove('whatsAppButtom--visible');
    }
}


export const observerAboutSection = new IntersectionObserver(aboutIntersection, options);


export const onScroll = () => {
    window.addEventListener('scroll', onScrollHandler);
}



observerAboutSection.observe(about);
onScroll();

