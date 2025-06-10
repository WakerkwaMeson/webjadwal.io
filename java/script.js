document.addEventListener('DOMContentLoaded', () => {
    // Kode untuk efek typing (tetap sama)
    const typingTextElement = document.getElementById('typing-text');
    const words = ["Programmer", "Developer", "Fotografer", "Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBeforeDelete = 1500;
    const delayBeforeType = 800;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        let currentTypingSpeed = isDeleting ? deletingSpeed : typingSpeed;
        if (!isDeleting && charIndex === currentWord.length) {
            currentTypingSpeed = delayBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentTypingSpeed = delayBeforeType;
        }
        setTimeout(typeEffect, currentTypingSpeed);
    }
    typeEffect();

    // --- NEW: Intersection Observer for Scroll Animations ---

    // Pilih semua elemen yang ingin Anda animasikan saat mereka muncul
    const animatedElements = document.querySelectorAll('.fade-in-slide-up, .fade-in-slide-right, .fade-in');

    // Opsi untuk Intersection Observer
    const observerOptions = {
        root: null, // Mengamati elemen relatif terhadap viewport
        rootMargin: '0px', // Tidak ada margin tambahan
        threshold: 0.2 // Pemicu ketika 20% dari elemen terlihat
    };

    // Callback function yang akan dijalankan ketika elemen masuk/keluar viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika elemen masuk viewport
                entry.target.classList.add('visible');
                // Berhenti mengamati setelah animasi pertama kali (opsional)
                // Jika Anda ingin animasi terjadi setiap kali di-scroll ke atas/bawah,
                // jangan uncomment baris di bawah ini.
                // observer.unobserve(entry.target);
            } else {
                // Jika elemen keluar viewport (opsional: reset animasi saat keluar)
                // Jika Anda ingin animasi terjadi setiap kali di-scroll ke atas/bawah,
                // uncomment baris di bawah ini.
                // entry.target.classList.remove('visible');
            }
        });
    };

    // Buat Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Amati setiap elemen yang dipilih
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- END NEW ---
});

