document
  .getElementById("chooseSomePhotosHostPropertyBodyPhotoSelection")
  .addEventListener("click", () => {
    let imgInput = document.createElement("input");
    imgInput.type = "file";
    imgInput.click();
  });
