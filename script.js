// KONFETI
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let confetti = [];
for (let i = 0; i < 100; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 50 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltAngleIncrement: Math.random() * 0.07 + 0.05,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
    ctx.stroke();
  });

  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.tiltAngle += c.tiltAngleIncrement;
    c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

drawConfetti();

// TYPEWRITER
const wishText = document.getElementById("wish-text");
const wishes = [
  "Semoga panjang umur dan sehat selalu! 🎂",
  "Semoga Makin Panjang ✨",
  "Banyak rezeki dan kebahagiaan menyertai 💰",
  "Hari ini milikmu, rayakan dengan senyum! 😊"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (textIndex < wishes.length) {
    if (charIndex < wishes[textIndex].length) {
      wishText.textContent += wishes[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 50);
    } else {
      textIndex++;
      charIndex = 0;
      setTimeout(() => {
        wishText.textContent = '';
        typeEffect();
      }, 2000);
    }
  } else {
    textIndex = 0;
    setTimeout(typeEffect, 1000);
  }
}

window.onload = typeEffect;
