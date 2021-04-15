const elements = [".header1", ".text1", ".img1", ".header2", ".img2", ".text2", ".header3", ".text3", ".img3"];
let delayTime = 0;
for (let element of elements) {
    gsap.fromTo(element, {y:-30, opacity: 0}, {y:20, opacity:1, duration:1, delay: delayTime+=1});
}