function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links, all sections, and the title element
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section'); // Adjust the selector as needed
    const title = document.querySelector('.logo'); // Ensure this is the correct selector for your title

    // Function to remove active class from all links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active-link'));
    }

    // Click event listener for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClasses();
            this.classList.add('active-link');
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', () => {
        let currentSection = '';
        let isTitleHighlighted = false;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }

            // Check if the first section is currently in view
            if (section === sections[0] && window.scrollY < (sectionTop + sectionHeight)) {
                isTitleHighlighted = true;
            }
        });

        if (isTitleHighlighted) {
            title.classList.add('highlighted-title');
        } else {
            title.classList.remove('highlighted-title');
        }

        removeActiveClasses();
        navLinks.forEach(link => {
            if (link.href.includes(currentSection)) {
                link.classList.add('active-link');
            }
        });
    });
});



// changeing home Background 

document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        'url(assets/pictures/background_1.jpeg)',
        'url(assets/pictures/background_2.jpeg)',
        'url(assets/pictures/background_3.jpeg)'
    ];

    let currentBackground = 0;

    setInterval(function() {
        currentBackground = (currentBackground + 1) % backgrounds.length;
        document.getElementById('home').style.backgroundImage = backgrounds[currentBackground];
    }, 5000);
});
