const messages = [
    "Every time I look into your eyes, I feel like I’m lost in them.",
  "I don’t know why, but your eyes always feel so comforting, like home.",
  "Your eyes are the safest place I’ve ever known.",
  "Do you realize your eyes can say more than words ever could?",
  "Even without saying much, your eyes already brighten up my day.",
  "I really love your vibe, it always makes me feel at ease @wanhass_ 💖",
];

let i = 0;

function nextPopup() {
  i++;
  if (i < messages.length) {
    document.getElementById("popupText").innerText = messages[i];
  } else {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("questionPage").classList.add("active");
  }
}

function moveNoBtn() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

function goToGallery() {
  document.getElementById("questionPage").classList.remove("active");
  document.getElementById("galleryPage").classList.add("active");
}
