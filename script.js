const share = document.querySelector(".social-media");
const socialMedia = document.querySelector(".social-media-icons");
const author = document.querySelector(".author");

share.addEventListener("click", function () {
  socialMedia.classList.toggle("hidden");
  author.classList.toggle("active");
  share.classList.toggle("active");
});
