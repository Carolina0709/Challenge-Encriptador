/*box tex*/
function toggleMain() {
  ctnAll = document.querySelector(".ctn-all");
  ctnAll.classList.toggle("active");
  document.querySelector(".ctn-second .ctn-info").classList.add("hide");
}

/*Cursor*/
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});

/*Image message*/
document.addEventListener("DOMContentLoaded", function () {
  const textAreas = document.querySelectorAll("textarea");

  textAreas.forEach((textarea) => {
    formatTextarea(textarea);

    const container = textarea.closest(".ctn-item");
    const image = container.querySelector(".ctn-img-text img");
    const paragraph = container.querySelector(".ctn-img-text p");

    textarea.addEventListener("input", function () {
      const textareaValue = textarea.value.trim();

      if (textareaValue === "") {
        changeImageAndText(
          image,
          paragraph,
          "./img/warning.png",
          "Warning Icon",
          "¡ Ningún mensaje fue encontrado !"
        );
      } else {
        if (textarea === document.getElementById("textarea1")) {
          changeImageAndText(
            image,
            paragraph,
            "./img/rocket.png",
            "Rocket Icon",
            "¿ Listo para comenzar la aventura ?"
          );
        } else {
          changeImageAndText(
            image,
            paragraph,
            "./img/question.png",
            "Question Icon",
            "¡ El mensaje es secreto ! Tendrás que desencriptarlo"
          );
        }
      }
    });
  });
});

function changeImageAndText(image, paragraph, src, alt, text) {
  image.src = src;
  image.alt = alt;
  paragraph.textContent = text;
}

/*Format the textareas as requested*/
function formatTextarea(textarea) {
  textarea.addEventListener("input", function () {
    const inputValue = this.value;
    const newValue = inputValue
      .toLowerCase() // Convert all letters to lowercase
      .normalize("NFD") // Remove accents
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics characters
      .replace(/[^\w\s]/gi, ""); // Remove special characters

    if (inputValue !== newValue) {
      this.value = newValue;
    }
  });
}
