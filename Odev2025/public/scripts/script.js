// Sidebar'ı dinamik olarak yükle
document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .then(() => {
            // Sidebar aç-kapa işlevini ekleyelim
            document.querySelector(".menu-btn").addEventListener("click", toggleSidebar);
            document.querySelector(".close-btn").addEventListener("click", toggleSidebar);
        });
});

// Sidebar aç-kapa fonksiyonu
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
