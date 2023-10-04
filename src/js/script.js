var typed = new Typed(".multiple-text", {
    strings: ["Front-End", "Back-End", "Full-Stack"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
/*
var celular = document.getElementById("celular")

celular.addEventListener("input", () => {
    var limparValor = celular.value.replace(/\D/g, "").substring(0, 11)

    var numerosArray = limparValor.split("");

    var numeroFormatado = "";

    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    if (numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }

    if (numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }

    celular.value = numeroFormatado;
})*/
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    // sticky header


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll

}