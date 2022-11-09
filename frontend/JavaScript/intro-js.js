function colorChange() {
    document.getElementById("pColor").style.color = "#aabbcc";
    document.getElementById("pColor").style.backgroundColor = "rgb(60, 60, 60)";
}

function showDate() {
    document.getElementById("pDate").innerHTML = new Date();
}

function hideShow() {
    var condition = document.getElementById("pHide").style.visibility;

    if (condition == "hidden"){
        document.getElementById("pHide").style.visibility = "vidible";
    } else {
        document.getElementById("pHide").style.visibility = "hidden"
    }
}