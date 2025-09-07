function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  lightbox.style.display = "block";
  lightboxImg.src = imgElement.src;
  caption.innerHTML = imgElement.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}