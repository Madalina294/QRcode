const input = document.getElementById("input");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  const imgQR = document.querySelector(".imgQR");
  imgQR.innerHTML = "";
  if (input.value.length > 0) {
    const QRicon = document.createElement("img");
    //console.log(input.value);
    QRicon.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value.trim()}`;
    imgQR.append(QRicon);
  } else {
    imgQR.innerHTML = `<p>Please enter your text or URL</p>`;
  }

  input.value = "";
});
