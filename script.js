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
// Zoom Transition (Hero -> About)
const zoomTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-wrapper",
        pin: true,
        start: "top top",
        end: "+=150%", // Scroll distance for the animation
        scrub: true
    }
});

zoomTl.to(".hero__title", {
    scale: 50, // Zoom in massively
    opacity: 0,
    duration: 1,
    ease: "power2.in"
}, 0)
    .to(".hero__subtitle", {
        opacity: 0,
        duration: 0.5
    }, 0)
    .to(".about", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
    }, 0.5); // Start slightly after hero starts zooming

// Independent Floating Shapes Animation
function floatShape(selector) {
    gsap.to(selector, {
        x: "random(-100, 100)", // Random movement range
        y: "random(-100, 100)",
        rotation: "random(-180, 180)",
        duration: "random(10, 20)", // Slow, relaxing speed
        ease: "sine.inOut",
        onComplete: () => floatShape(selector) // Loop indefinitely with new random values
    });
}

// Start floating animations for each shape
floatShape(".shapes__item--cyan");
floatShape(".shapes__item--magenta");
floatShape(".shapes__item--yellow");

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
    ease: "back.out(1.7)",
    clearProps: "all"
});

// Contact Button Pulse
gsap.to(".contact__btn", {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Spotlight Interaction
const cards = document.querySelectorAll('.services__card');
const spotlights = document.querySelectorAll('.work-spotlight');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');
        const targetSpotlight = document.getElementById(targetId);

        // Close any open spotlights first
        spotlights.forEach(s => s.classList.remove('is-active'));

        // Activate the clicked spotlight
        if (targetSpotlight) {
            targetSpotlight.classList.add('is-active');

            // Optional: Add a "click" animation to the card
            gsap.fromTo(card, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
        }
    });
});

// Close spotlight when clicking outside (on the spotlight background)
spotlights.forEach(spotlight => {
    spotlight.addEventListener('click', (e) => {
        if (e.target === spotlight || e.target.classList.contains('spotlight-effect')) {
            spotlight.classList.remove('is-active');
        }
    });
});
