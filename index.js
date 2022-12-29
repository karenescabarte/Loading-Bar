const counter = document.querySelector(".counter");
const loadingBar = document.querySelector(".loading-bar-front");
let i=0;

function startLoading(){
        counter.innerHTML = i + "%";
        loadingBar.style.width =  i + "%";
        i++;
        (i<101) ? setTimeout(startLoading,50): false; 
}
startLoading();