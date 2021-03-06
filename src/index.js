import galleryItems from "./gallery-items.js";
import refs from "./refs";
import "./css/styles.css";

let counter = 0;

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
    calculateCounter(event);
  }
}

function onImageClose() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.src = "";
  window.removeEventListener("keydown", onEscPress);
}

function onEscPress(event) {
  if (event.code === "Escape") {
    onImageClose();
  }
}

function onScrollPress(event) {
  if (event.code === "ArrowLeft") {
    calculateCounter(event);
    if (counter === 0) {
      counter = galleryItems.length - 1;
      setNewImage(counter);
    } else {
      counter -= 1;
      setNewImage(counter);
    }
  }

  if (event.code === "ArrowRight") {
    calculateCounter(event);

    if (counter === galleryItems.length - 1) {
      counter = 0;
      setNewImage(counter);
    } else {
      counter += 1;
      setNewImage(counter);
    }
  }
}

function setNewImage(counter) {
  refs.lightboxImg.src = "";
  refs.lightboxImg.src = galleryItems[counter].original;
}

function calculateCounter(event) {
  galleryItems.map(({ original }, i) => {
    if (event.srcElement.href === original) {
      counter = i;
      event.srcElement.href = "";
    }
  });
}
