function loadinganimation() {
    gsap.from("#heading", {
        y: 80,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
    });
}
loadinganimation();


function animation() {
    var anim = document.querySelector("#one #img1");
    anim.addEventListener("mouseover", () => {
        gsap.to("#one #img1", {
            scale: 1.2,
            duration: 0.5,
        });
    });
    anim.addEventListener("mouseleave", () => {
        gsap.to("#one #img1", {
            scale: 1,
            duration: 0.5,
        });
    })
    anim = document.querySelector("#one #img2");
    anim.addEventListener("mouseover", () => {
        gsap.to("#one #img2", {
            scale: 1.2,
            duration: 0.5,
        });
    });
    anim.addEventListener("mouseleave", () => {
        gsap.to("#one #img2", {
            scale: 1,
            duration: 0.5,
        });
    })
    anim = document.querySelector("#one #img3");
    anim.addEventListener("mouseover", () => {
        gsap.to("#one #img3", {
            scale: 1.2,
            duration: 0.5,
        });
    });
    anim.addEventListener("mouseleave", () => {
        gsap.to("#one #img3", {
            scale: 1,
            duration: 0.5,
        });
    })

    anim = document.querySelector("#two #img11");
    anim.addEventListener("mouseover", () => {
        gsap.to("#two #img11", {
            scale: 1.2,
            duration: 0.5,
        });
    });
    anim.addEventListener("mouseleave", () => {
        gsap.to("#two #img11", {
            scale: 1,
            duration: 0.5,
        });
    })

    anim = document.querySelector("#two #img12");
    anim.addEventListener("mouseover", () => {
        gsap.to("#two #img12", {
            scale: 1.2,
            duration: 0.5,
        });
    });
    anim.addEventListener("mouseleave", () => {
        gsap.to("#two #img12", {
            scale: 1,
            duration: 0.5,
        });
    })
}
animation();

var q = document.querySelector("#eco img");
q.addEventListener("mouseover", () => {
    gsap.to("#eco img", {
        scale: 1.1,
        duration: 0.5
    })
})
q.addEventListener("mouseleave", () => {
    gsap.to("#eco img", {
        scale: 1,
        duration: 0.5
    })
})
