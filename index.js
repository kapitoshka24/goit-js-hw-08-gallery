import galleryItems from "./gallery-items.js";

let counter = 0;
const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".lightbox"),
  closeBtn: document.querySelector("button[data-action='close-lightbox']"),
  lightboxImg: document.querySelector("img.lightbox__image"),
  overlay: document.querySelector("div.lightbox__overlay"),
};

const galleryMarkup = galleryItems
  .map(({ description, original, preview }) => {
    return `
        <li class="gallery__item">
          <a
            class="gallery__link"
            href="${original}"
            >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);
refs.gallery.addEventListener("click", omImageOpen);
refs.closeBtn.addEventListener("click", onImageClose);
refs.overlay.addEventListener("click", onImageClose);
window.addEventListener("keydown", onScrollPress);

function omImageOpen(event) {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightboxImg.src = event.target.dataset.source;
    window.addEventListener("keydown", onEscPress);
  }
}

function onImageClose() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.src = "";
  window.removeEventListener("keydown", onEscPress);
}

function onEscPress(event) {
  if (event.key === "Escape") {
    onImageClose();
  }
}

function onScrollPress(event) {
  if (event.key === "ArrowLeft") {
    calculateCounter(event);
    if (counter === 0) {
      counter = galleryItems.length - 1;
      setNewImage(counter);
    } else {
      counter -= 1;
      setNewImage(counter);
    }
  }

  if (event.key === "ArrowRight") {
    calculateCounter(event);

    if (counter === galleryItems.length - 1) {
      counter = 0;
      setNewImage(counter);
    } else {
      counter += 1;
      setNewImage(counter);
    }

    console.log("counter", counter);
  }
}

function setNewImage(counter) {
  refs.lightboxImg.src = "";
  refs.lightboxImg.src = galleryItems[counter].original;
}

function calculateCounter(event) {
  galleryItems.map(({ original }, i) => {
    console.log(event.srcElement.href);
    if (event.srcElement.href === original) {
      counter = i;
      event.srcElement.href = "";
    }
  });
}
