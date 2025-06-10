document.addEventListener('DOMContentLoaded', () => {
    const typingTextElement = document.getElementById('typing-text');
    const words = ["Progammer", "Developer", "Fotografer", "Designer"]; // Kata-kata yang akan di-typing
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Kecepatan mengetik (ms)
    const deletingSpeed = 100; // Kecepatan menghapus (ms)
    const delayBeforeDelete = 1500; // Jeda sebelum mulai menghapus (ms)
    const delayBeforeType = 800; // Jeda sebelum mulai mengetik kata berikutnya (ms)

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // Menghapus karakter
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Mengetik karakter
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentTypingSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            // Selesai mengetik, jeda lalu mulai menghapus
            currentTypingSpeed = delayBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Selesai menghapus, pindah ke kata berikutnya
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentTypingSpeed = delayBeforeType;
        }

        setTimeout(typeEffect, currentTypingSpeed);
    }

    // Panggil fungsi typing saat halaman dimuat
    typeEffect();
});

// destop 
document.addEventListener('DOMContentLoaded', () => 
    // Fungsi untuk memeriksa ukuran layar dan melakukan tindakan
    function checkScreenSize() {
        const screenWidth = window.innerWidth; // Lebar viewport dalam piksel

        // Anda bisa menambahkan kelas ke body atau elemen lain
        // yang kemudian bisa di-styling dengan CSS
        if (screenWidth < 600) {
            document.body.classList.add('is-mobile');
            document.body.classList.remove('is-tablet', 'is-desktop');
            console.log('Mode Smartphone');
            // Lakukan tindakan spesifik untuk smartphone
            // Contoh: menyembunyikan elemen tertentu yang hanya ada di desktop
            // document.getElementById('desktop-only-widget').style.display = 'none';
        } else if (screenWidth >= 600 && screenWidth < 1024) {
            document.body.classList.add('is-tablet');
            document.body.classList.remove('is-mobile', 'is-desktop');
            console.log('Mode Tablet');
            // Lakukan tindakan spesifik untuk tablet
        } else {
            document.body.classList.add('is-desktop');
            document.body.classList.remove('is-mobile', 'is-tablet');
            console.log('Mode Desktop');
            // Lakukan tindakan spesifik untuk desktop
            // Contoh: memastikan elemen yang disembunyikan di mobile kembali terlihat
            if (document.getElementById('desktop-only-widget')) {
            //     document.getElementById('desktop-only-widget').style.display = 'block';
            // }
        }
    }

    // Panggil fungsi saat halaman pertama kali dimuat
    checkScreenSize();

    // Panggil fungsi setiap kali ukuran jendela diubah
    window.addEventListener('resize', checkScreenSize);

    // Contoh penggunaan event resize untuk log saja (tidak akan sering digunakan untuk styling layout)
    window.addEventListener('resize', () => {
        console.log(`Window resized to: ${window.innerWidth}px x ${window.innerHeight}px`);
    });

    // ... (kode JavaScript untuk efek typing Anda tetap di sini) ...
});