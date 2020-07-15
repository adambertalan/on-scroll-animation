var controller = new ScrollMagic.Controller();

const scaleScene = new ScrollMagic.Scene({
    triggerElement: '#enlarge-trigger',
})
.setTween('img', .5, {
    width: '200px',
    height: '200px'
})
.setPin('.img-container')
// .addIndicators({name: '1 (duration: 0)'})
.addTo(controller);

const rotateScene = new ScrollMagic.Scene({
    triggerElement: '.spin',
    duration: 600
})
.setTween('img', {
    rotation: 720,
    ease: 'none'
})
// .addIndicators({name: '2 (duration: 600)'})
.addTo(controller);

const fadeScene = new ScrollMagic.Scene({
    triggerElement: '.fade',
    duration: 300
})
.setTween('img', {
    opacity: 0
})
// .addIndicators({name: '3 (duration: 300)'})
.addTo(controller);