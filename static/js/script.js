// Password gate
(function () {
    const HASH = '3d1e557b540ac045b3b327994a351f08a443f9216f9b2b8d3a0f42b58671ac83';
    const SESSION_KEY = 'wedding_auth';
    const gate = document.getElementById('password-gate');

    if (localStorage.getItem(SESSION_KEY) === '1') {
        gate.classList.add('hidden');
        return;
    }

    async function sha256(str) {
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function attempt() {
        const input = document.getElementById('password-gate__input').value;
        const hash = await sha256(input);
        if (hash === HASH) {
            localStorage.setItem(SESSION_KEY, '1');
            gate.classList.add('hidden');
        } else {
            document.getElementById('password-gate__error').hidden = false;
            document.getElementById('password-gate__input').value = '';
        }
    }

    document.getElementById('password-gate__submit').addEventListener('click', attempt);
    document.getElementById('password-gate__input').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') attempt();
    });
})();

// Event listeners on the burger menu icon
document.addEventListener('DOMContentLoaded', () => {
    const openClass = 'nav-mobile__menu--open'
    
    const mobileMenu = document.getElementById('nav-mobile-menu')
    const menuButton = document.getElementById('nav-mobile-menu-button')
    let menuOpen = false;

    const toggleMenu = (event) => {
        event.stopPropagation()
        if(!menuOpen){
            mobileMenu.classList.add(openClass)
            menuOpen = true
        } else {
            mobileMenu.classList.remove(openClass)
            menuOpen = false
        }
    }
    
    // Clicking buttons can open/close mobile menu
    menuButton.addEventListener('click', toggleMenu)
    
    // Clicking links in the mobile menu closes the menu
    const mobileMenuLinks = document.getElementsByClassName('nav-mobile__link')
    for (let i = 0; i < mobileMenuLinks.length; i++){
        mobileMenuLinks[i].addEventListener('click', toggleMenu)
    }

})

// Burger menu icon animation
document.addEventListener('DOMContentLoaded', () => {

    const openClass = 'nav-mobile__burger--open'
    const menuButton = document.getElementById('nav-mobile-menu-button')
    let menuOpen = false

    const toggleBurger = (event) => {
        event.stopPropagation()
        if(!menuOpen){
            menuButton.classList.add(openClass)
            menuOpen = true
        } else {
            menuButton.classList.remove(openClass)
            menuOpen = false
        }
    }

    // Clicking the burger menu toggles it from burger to X symbol
    menuButton.addEventListener('click', toggleBurger)

    // Clicking links in the mobile menu closes the menu
    const mobileMenuLinks = document.getElementsByClassName('nav-mobile__link')
    for (let i = 0; i < mobileMenuLinks.length; i++){
        mobileMenuLinks[i].addEventListener('click', toggleBurger)
    }
})