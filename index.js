document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll("nav a");

    // Función para verificar en qué sección está el usuario
    function setActiveLink() {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            if (!link.hash) return; // Ignorar enlaces sin hash
            let section = document.querySelector(link.hash);
            if (!section) return; // Ignorar si la sección no existe

            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
});
