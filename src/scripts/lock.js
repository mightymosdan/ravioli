const lockIcon = document.getElementById('inpLock')
lockIcon.addEventListener('click', function(e){
    console.log("Locking");
    setTimeout(lock, 1000);
});

function lock(){
    console.log('Locked')
    window.location.replace("index.html");

}