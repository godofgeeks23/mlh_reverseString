function reverse() {
    var target = document.getElementById("input");
    var rev = target.value.split("").reverse().join("");
    document.getElementById("output").innerHTML = rev;
}
