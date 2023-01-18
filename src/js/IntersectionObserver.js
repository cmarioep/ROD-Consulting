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

const handler = (target) => {
    console.log(target)

    if(isInViewport(target)) {
        whatsAppButtom.classList.add('whatsAppButtom--visible');
    } 
  
}


export const observer = new IntersectionObserver(handler, options);


