container
const digit =document.getElementById("digit");
const sub = document.getElementById("decrease");
const add = document.getElementById("increase");
const reset = document.getElementById("reset");

add.addEventListener('click', () => {
    digit.innerHTML++;
 
});
sub.addEventListener('click', () => {
    digit.innerHTML--;
});
reset.addEventListener('click', () => {
    digit.innerHTML = 0;
});

