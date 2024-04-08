var totalClicks = 0;


var shown = false;
document.querySelector("main").addEventListener("click", function() {

    totalClicks += 1;
    localStorage.setItem("totalClicks", totalClicks);
    if(shown) {
        document.querySelector("#java").textContent = "Go Blue! Total clicks:" + totalClicks;
    }
});

document.querySelector("#java").addEventListener("click", function() {
    document.querySelector("#java").textContent = "Go Blue! Total clicks:" + totalClicks;
    shown = true;
});

window.onload = function() {
    //initialize total clicks from local
    totalClicks = parseInt(localStorage.getItem("totalClicks"));
};

