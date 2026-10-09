// Membuat Navbar berubah transparan menjadi solid (putih blur) saat di-scroll ke bawah
const header = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});