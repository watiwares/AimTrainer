const startBtn = document.querySelector("#start");
    screens = document.querySelectorAll(".screen")

startBtn.addEventListener("click" , () => {
    screens[0].classList.add("up");
});


console.log("oui");