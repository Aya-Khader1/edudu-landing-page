function includeHTML(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); 
        })
        .catch(err => console.error(err));
}

includeHTML('header', 'components/header.html', initializeHeader);
includeHTML('footer', 'components/footer.html');
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
