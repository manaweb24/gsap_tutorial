// TweenMax.fromTo('.hero', 1, {height:'0%'}, {height:'80%', ease: Power2.easeInOut});
// TweenMax.fromTo('.hero', 1, {width:'100%'}, {width:'70%', ease: Power2.easeInOut, delay: 1.2});
// TweenMax.fromTo('.overlay', 1, {x:'-100%'}, {x:'0%', ease: Power2.easeInOut, delay: 1.2});
// TweenMax.fromTo('.header-title', 0.5, {opacity:0, y: -10}, {opacity:1, y:0, ease: "back.out(1.7)", delay: 1.5});
// TweenMax.fromTo('.sns', 0.5, {opacity:0, x: 10}, {opacity:1, x:0, ease: Power2.easeInOut, delay: 1.8});
// TweenMax.staggerFromTo('.letters', 0.5, {x:'1em', y: '1.2em', rotateZ: 180}, {x:0, y:0, rotateZ: 0, ease: Power2.easeInOut, delay: 1.2}, 0.05);

tl = new TimelineMax();
tl.fromTo('.hero', 1, {height:'0%'}, {height:'80%', ease: Power2.easeInOut})
.addLabel('up')
.fromTo('.hero', 1, {width:'100%'}, {width:'70%', ease: Power2.easeInOut}, 'up+=0.2')
.fromTo('.overlay', 1, {x:'-100%'}, {x:'0%', ease: Power2.easeInOut}, 'up+=0.2')
.fromTo('.header-title', 0.5, {opacity:0, y: -10}, {opacity:1, y:0, ease: "back.out(1.7)"}, 'up+=0.5')
.fromTo('.sns', 0.5, {opacity:0, x: 10}, {opacity:1, x:0, ease: Power2.easeInOut}, 'up+=0.8')
.staggerFromTo('.letters', 0.5, {x:'1em', y: '1.2em', rotateZ: 180}, {x:0, y:0, rotateZ: 0, ease: Power2.easeInOut}, 0.05, 'up+=0.2');