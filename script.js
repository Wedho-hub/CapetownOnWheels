// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const openWhatsApp = () => {
    const phoneNumber = "+27813872713";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
};