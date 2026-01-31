document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.querySelector('.btn');

    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            alert('Your caffeine fix is on the way!');
        });
    }

    // Example of a simple scroll effect for the nav
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = '#2a1d15';
        } else {
            nav.style.background = '#3d2b1f';
        }
    });
});
