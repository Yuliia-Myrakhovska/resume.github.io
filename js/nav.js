document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item-link');
    const sections = document.querySelectorAll('.section');
    let lastId;

    function setInitialActiveLink() {
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    }

    setInitialActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function updateActiveLink() {
        let index = sections.length;
        while (--index >= 0) {
            const section = sections[index];
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                if (lastId !== section.id) {
                    lastId = section.id;
                    navLinks.forEach(link => link.classList.remove('active'));
                    document.querySelector(`a[data-target="#${section.id}"]`).classList.add('active');
                }
                break;
            }
        }
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink); 
});