let qrCode = document.querySelector("img");
let qrText = document.querySelector("input");

function qrCodeGenerator() {
    let size = "200x200";
    let data = qrText.value;
    let baseUrl = "http://api.qrserver.com/v1/create-qr-code";

    let url = `${baseUrl}?data=${data}&size=${size}`;
    qrCode.src = url;
    qrCode.style.display = "block";
    document.getElementById("show_btn").style.display = "block";

}


function saveImage() {

    let imgPath = qrCode.getAttribute('src');

    let filename = "QR_Code";

    saveAs(imgPath, filename);

}