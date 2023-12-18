var allButtons = document.querySelectorAll('#change button');
var allSlides = document.querySelectorAll('.slide');
var timeout = 7000;

function entry(slideName, button) {
    let style = window.getComputedStyle(document.querySelector(`#${slideName} .tagline`));
    button.style.backgroundColor = style.getPropertyValue('color');
    document.querySelector('#scroll').style.backgroundColor = style.getPropertyValue('color');
    gsap.from(`#${slideName} .tagline`, {
        y: 75,
        opacity: 0,
        delay: 0.2,
        duration: 0.4
    });

    gsap.from(`#${slideName} .tiles`, {
        y: 60,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2
    });

    document.querySelector(`#${slideName}`).style.opacity = 1;
}

function checkActive() {
    for (let i = 0; i < allSlides.length; i++) {
        if (allSlides[i].style.opacity == '1')
            return i;
    }
}

function exit() {
    let exitIndex = checkActive();
    allButtons[exitIndex].style.backgroundColor = "#dadada";
    allSlides[exitIndex].style.opacity = 0;
}

function changeSlide(slideName, button) {
    if (document.querySelector(`#${slideName}`).style.opacity != '1')
        exit();
    entry(slideName, button);
    timeout = 7000;
}

function rotate() {
    let index = checkActive();
    if (index < 3) {
        allButtons[index + 1].click();
        return;
    }
    changeSlide(allSlides[0].id, allButtons[0])
}

setInterval(() => {
    rotate();
}, timeout);

entry('chai', allButtons[0]);
const tl = gsap.timeline({ repeat: -1 });

tl.to('#scroll', {
    duration: 1,
    y: -20,
    ease: 'power2.Out'
})
tl.to('#scroll', {
    duration: 1,
    y: 0,
    ease: 'power2.Out'
})

// -------------------------------------------------------------

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
    smartphone: {
        smooth: true
    }
});

let prevScrollTop = locoScroll.scroll.instance.scroll.y;
console.log(`prev= ${prevScrollTop}`)

function scrollDown(element) {
    locoScroll.scrollTo(document.querySelector(element), {
        duration: 200
    });
    setTimeout(() => {
        let currentScrollTop = locoScroll.scroll.instance.scroll.y;
        console.log(`curr= ${currentScrollTop}`)
    }, 201);
}