function switchGallery() {
    document.getElementById("mainContent").style.setProperty("display", "none");
    document.getElementById("gallery").style.setProperty("display", "inline");
}

function switchMain() {
    document.getElementById("mainContent").style.setProperty("display", "inline");
    document.getElementById("gallery").style.setProperty("display", "none");
}