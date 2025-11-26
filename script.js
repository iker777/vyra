gsap.registerPlugin(ScrollTrigger);

// Initial Animation
const tl = gsap.timeline();

tl.from(".shapes__item", {
    duration: 2,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
})
    .from(".hero__title", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out"
    }, "-=1.5")
    .from(".hero__subtitle", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power2.out"
    }, "-=1");

// Scroll Animations for Shapes - Parallax Effect
gsap.to(".shapes__item--cyan", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    y: 300,
    x: 100,
    rotation: 45
});

gsap.to(".shapes__item--magenta", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    },
    y: -200,
    x: -100,
    rotation: -45
});

gsap.to(".shapes__item--yellow", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    y: -200,
    x: 50
});

// Section Title Reveals
gsap.utils.toArray('.section__title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// About Text Reveal
gsap.from(".about__text", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

// Services Cards Stagger
gsap.from(".services__card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

// Contact Button Pulse
gsap.to(".contact__btn", {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
