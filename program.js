
function openSettings() {
    document.getElementById("settings").style.display = "flex";
    document.getElementById("body").style.backgroundColor = "#696969";
    document.getElementById("close_btn").style.opacity = 1;
    document.getElementById("settings").style.opacity = 1;
}

function closeSettings() {
    document.getElementById("settings").style.display = "none";
    document.getElementById("body").style.backgroundColor = "#303030";
}