// script.js
const tombolAlert = document.getElementById("tombol");
if (tombolAlert) {
    tombolAlert.addEventListener("click", function() {
        alert("Missile Diluncurkan🚀");
    });
}

const tombolkedua = document.getElementById("tombolkedua");
if (tombolkedua) {
    tombolkedua.addEventListener("click", function() {
        window.location.href = "profil.html";
    });
}

const tombolkembali = document.getElementById("tombolkembali");
if (tombolkembali) {
    tombolkembali.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}