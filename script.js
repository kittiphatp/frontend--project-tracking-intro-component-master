let iconMenu = document.querySelector('.ham-menu');
let popup = document.querySelector('.popup');

let toggle = false;



iconMenu.addEventListener('click', () => {
    // Toggle to opposite after click
    toggle = !toggle
    
    if (toggle) {
        iconMenu.style.background = "url(./images/icon-close.svg) no-repeat 0 0";
        iconMenu.style.backgroundSize = "cover";
        iconMenu.style.transform = "rotate(0deg)"
        iconMenu.style.transition = "transform 1.1s"
        
        popup.innerHTML = `
        <ul class="popup-menu">
        <li>PRODUCT</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>LOGIN</li>
        </ul>
        `

    } else {
        iconMenu.style.background = "url(./images/icon-hamburger.svg) no-repeat 0 0";
        iconMenu.style.backgroundSize = "cover";
        iconMenu.style.transform = "rotate(-180deg)"

        popup.innerHTML = ``
    }

})