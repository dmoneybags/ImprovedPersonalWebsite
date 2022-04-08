import anime from 'animejs';
export function animateTextSwoosh(id){
    var textWrapper = document.querySelector('#' + id);
    textWrapper.style.visibility = "visible";
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '#' + id + ' .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}
export function animateRight(id){
    var element = document.querySelector('#' + id);
    anime.timeline({loop: false})
    .add({
        targets: '#' + id,
        translateX: 500
    })
}
export function setDisappear(id){
    var textWrapper = document.querySelector('#' + id);
    textWrapper.style.visibility = "hidden";
}
export function animateSlipper(id){
    var textWrapper = document.querySelector('#' + id);
    textWrapper.style.visibility = "visible";
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '#' + id,
        translateY: [40,0],
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
    })
}
export function animateSlideIn(id){
    var textWrapper = document.querySelector('#' + id);
    textWrapper.style.visibility = "visible";
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '#' + id,
        translateX: [100,0],
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
    })
}