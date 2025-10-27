document.addEventListener('DOMContentLoaded', () => {

    // --- Ambil semua elemen layar dari HTML ---
    const homeScreen = document.getElementById('home-screen');
    const noThanksScreen = document.getElementById('no-thanks-screen');
    const menuScreen = document.getElementById('menu-screen');
    const galleryScreen = document.getElementById('gallery-screen');
    const flowerScreen = document.getElementById('flower-screen');
    const messageScreen = document.getElementById('message-screen');

    // --- Buat array dari semua layar untuk mempermudah ---
    const screens = [homeScreen, noThanksScreen, menuScreen, galleryScreen, flowerScreen, messageScreen];

    // --- Ambil semua elemen tombol dari HTML ---
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const tryAgainBtn = document.getElementById('try-again-btn');
    
    const galleryChoice = document.getElementById('gallery-choice');
    const giftChoice = document.getElementById('gift-choice');
    const messageChoice = document.getElementById('message-choice');

    const returnBtns = document.querySelectorAll('.return-btn');
    const returnToHomeBtn = document.getElementById('return-to-home-btn');

    // --- Fungsi untuk berpindah antar layar ---
    const showScreen = (screenToShow) => {
        screens.forEach(screen => {
            if (screen) screen.classList.add('hidden');
        });
        if (screenToShow) screenToShow.classList.remove('hidden');
    };

    // --- LOGIKA BARU UNTUK HALAMAN BUNGA INTERAKTIF ---
    const points = document.querySelectorAll('.point');
    const textDisplay = document.querySelector('.flower-text-display');
    const textDisplayP = textDisplay.querySelector('p');
    
    // Set untuk melacak angka yang sudah diklik
    let clickedPoints = new Set();
    const totalPoints = points.length;

    const flowerTexts = {
        '1': "You know? gelar S.T mu itu tuh kayak nemuin Edelweiss di puncak gunung, Rey. It's a proof kalo perjalanan selama kuliahmu itu akhirnya worth it. Gila, you finally made it!",
        '2': "Nemuin Edelweiss itu hadiah buat petualang sejati. Sama kayak gelar S.T ini adalah hadiah paling keren buat petualangmu empat tahun ini. So, welcome to the next level!",
        '3': "Warnanya yang putih bersih itu literally ngewakilin semua usahamu yang tulus. No shortcuts, bener-bener murni kerja kerasmu.",
        '4': "Edelweiss kan famous sebagai 'bunga abadi'. Just like you degree and knowledge, itu bakal nempel terus sama kamu selamanya.",
        '5': "Kamu sekuat Edelweiss yang bisa survive di cuaca ekstrem. Bener-bener nunjukkin sekonsisten apa kamu ngadepin semua drama revisian. But look at you now!",
        '6': "Kelihatannya simpel, but actually rumit. Persis kayak cara kamu mecahin masalah-masalah ribet selama kuliah. You always know how to solve it.",
        '7': "Bunga ini ngga perlu teriak buat diliatin, sama kayak kamu Rey yang diem-diem kerja keras. And now? Let your success do the talking.",
        '8': "Kenapa ini jadi super meaningful? It's because of the process. Gelarmu ini berharga banget karena semua perjuangan behind the scenes-nya.",
        '9': "Edelweiss cuma tumbuh di tempat yang pas. Kayak kamu yang butuh fokus dan ketenangan buat ngasilin karya terbaik. And you absolutely nailed it!",
        '10': "Keindahannya itu ngga perlu diubah biar dihargai. Sama kayak pencapaian kamu ini, it’s awesome karena ini bukti nyata dari diri kamu apa adanya. So be proud of yourself, Rey!",
    };

    // Fungsi untuk memunculkan kembali semua angka
    const resetPoints = () => {
        // Beri jeda sedikit agar user bisa membaca teks terakhir
        setTimeout(() => {
            points.forEach(p => {
                p.classList.remove('point-hidden');
            });
            clickedPoints.clear(); // Kosongkan tracker

            // Kembalikan teks ke placeholder
            textDisplayP.classList.remove('visible');
            textDisplayP.classList.add('placeholder');
            textDisplayP.textContent = 'Click a number to reveal the meaning!';
        }, 2000); // Tunggu 2 detik sebelum semuanya muncul lagi
    };

    points.forEach(point => {
        point.addEventListener('click', () => {
            const pointNumber = point.dataset.point;

            // Jika titik sudah diklik sebelumnya, jangan lakukan apa-apa
            if (clickedPoints.has(pointNumber)) {
                return;
            }

            // --- Tampilkan Teks ---
            textDisplayP.classList.remove('visible', 'placeholder');
            setTimeout(() => {
                textDisplayP.textContent = flowerTexts[pointNumber];
                textDisplayP.classList.add('visible');
            }, 300);

            // --- Sembunyikan Angka & Lacak ---
            point.classList.add('point-hidden');
            clickedPoints.add(pointNumber);

            // --- Cek jika semua angka sudah diklik ---
            if (clickedPoints.size === totalPoints) {
                resetPoints();
            }
        });
    });

    // --- Menambahkan aksi saat setiap tombol di-klik ---
    yesBtn.addEventListener('click', () => showScreen(menuScreen));
    noBtn.addEventListener('click', () => showScreen(noThanksScreen));
    tryAgainBtn.addEventListener('click', () => showScreen(homeScreen));

    galleryChoice.addEventListener('click', () => showScreen(galleryScreen));
    giftChoice.addEventListener('click', () => showScreen(flowerScreen));
    messageChoice.addEventListener('click', () => showScreen(messageScreen));
    returnToHomeBtn.addEventListener('click', () => showScreen(homeScreen));

    returnBtns.forEach(btn => {
        btn.addEventListener('click', () => showScreen(menuScreen));
    });

});