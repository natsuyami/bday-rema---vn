document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('standByMeAudio').play();
    document.removeEventListener('click', musicPlay);
}
