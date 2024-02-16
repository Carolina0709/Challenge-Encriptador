/*Encryptor function*/
const Encryptor = (function () {
  const btnEncrypt = document.querySelector(".btn-encrypt");
  const btnDecrypt = document.querySelector(".btn-decrypt");
  const textArea1 = document.getElementById("textarea1");
  const textArea2 = document.getElementById("textarea2");

  btnEncrypt.addEventListener("click", () => {
    const text = textArea1.value.trim();
    const newText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    textArea1.value = "";
    insertText(newText, textArea2);
  });

  btnDecrypt.addEventListener("click", () => {
    const text = textArea2.value.trim();
    const newText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    textArea2.value = "";
    insertText(newText, textArea1);
  });

  function insertText(text, textarea) {
    textarea.value = text;
  }
})();

/*Copy function*/
const Copier = (function () {
  const textArea2 = document.getElementById("textarea2");

  function copy() {
    if (textArea2.value.trim() !== "") {
      textArea2.select();
      document.execCommand("copy");
      document.querySelector(".ctn-second .ctn-info").classList.remove("hide");
    }
  }

  document.querySelector("#btn-copy").addEventListener("click", copy);
})();
