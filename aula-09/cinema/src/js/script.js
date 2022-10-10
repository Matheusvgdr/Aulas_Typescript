var redirect = document.querySelector(".espacial");
var redirect2 = document.querySelector(".terror");

redirect.addEventListener( "click", () => {
    window.location.href = 'espacial.html';
});

redirect2.addEventListener( "click", () => {
    window.location.href = './terror/terror.component.html';
})