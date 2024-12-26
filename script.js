// Ambil elemen
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");

// Fungsi jika tombol "Ya" diklik
yesButton.addEventListener("click", () => {
    // Ubah tampilan card
    card.classList.add("changed");
    question.textContent = "Oke OTW sekarang!!!";
});

// Fungsi jika tombol "Gak" diklik
noButton.addEventListener("click", () => {
    // Pindahkan tombol ke posisi acak
    const card = document.querySelector(".card");
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.random() * (cardWidth - buttonWidth);
    const randomY = Math.random() * (cardHeight - buttonHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
