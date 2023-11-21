function switchGallery() {
    document.getElementById("mainContent").style.setProperty("display", "none");
    document.getElementById("gallery").style.setProperty("display", "block");
}

function switchMain() {
    document.getElementById("mainContent").style.setProperty("display", "block");
    document.getElementById("gallery").style.setProperty("display", "none");
}