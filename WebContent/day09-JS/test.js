window.onload = function () {
    document.getElementById("btn2").onclick = function () {
        alert("external");
    }
    document.getElementById("btn3").onclick = function () {
        document.write("document.write");
    }
}