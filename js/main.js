 const btndrop = document.querySelector(".dropbtn");
 const arrow = document.querySelector(".arrow");
 const menu = document.querySelector(".dropdown-menu")


    btndrop.addEventListener('click', () => {
        menu.style.display =
            menu.style.display === 'block' ? 'none' : 'block';

        arrow.style.transform =
            menu.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.style.display= nav.style.display==='block'?'none':'block';
    nav.classList.toggle("active");
});