const img0 = document.getElementById('img0');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');

let img0clicked = false;
let img1clicked = false;
let img2clicked = false;
let img3clicked = false;
let img4clicked = false;
let img5clicked = false;
let img6clicked = false;
let img7clicked = false;
let img8clicked = false;



function unlock(){
    // Unlock if there is no falses in unlocked and no trues in locked
    if (img2clicked && img5clicked && img8clicked && !img0clicked && 
        !img1clicked && !img3clicked && !img4clicked && !img6clicked && 
        !img7clicked){
        console.log('hi')
        window.location.replace("unlocked.html");
    } 
}

img0.addEventListener('click', function(e) {
    console.log("clicked 0")
    if(img0clicked !== true){
        img0clicked = true;
        img0.style = ""
    }
    else {
        img0clicked = false;
        img0.style = "--clip-start: ellipse(0 0 at 0 0);--clip-end: ellipse(150% 150% at 0 0);"
    }
    unlock();
});

img1.addEventListener('click', function(e) {
    console.log("clicked 1")
    if(img1clicked !== true){
        img1clicked = true;
        img1.style = ""
    }
    else {
        img1clicked = false;
        img1.style = "--clip-start: inset(100% 0 0 0); --clip-end: inset(0 0 0 0);"
    }
    unlock();
});

img2.addEventListener('click', function(e) {
    console.log("clicked 2")
    if(img2clicked !== true){
        img2clicked = true;
        img2.style = ""
    }
    else {
        img2clicked = false;
        img2.style = "--clip-start: ellipse(0 0 at 100% 0);--clip-end: ellipse(150% 150% at 100% 0);"
    }
    unlock();
});

img3.addEventListener('click', function(e) {
    console.log("clicked 3")
    if(img3clicked !== true){
        img3clicked = true;
        img3.style = ""
    }
    else {
        img3clicked = false;
        img3.style = "--clip-start: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);--clip-end: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);"
    }
    unlock();
});

img4.addEventListener('click', function(e) {
    console.log("clicked 4")
    if(img4clicked !== true){
        img4clicked = true;
        img4.style = ""
    }
    else {
        img4clicked = false;
        img4.style = "--clip-start: circle(0); --clip-end: circle(125%)"
    }
    unlock();
});

img5.addEventListener('click', function(e) {
    console.log("clicked 5")
    if(img5clicked !== true){
        img5clicked = true;
        img5.style = ""
    }
    else {
        img5clicked = false;
        img5.style = "--clip-start: inset(100% 100% 100% 100%);--clip-end: inset(0 0 0 0);"
    }
    unlock();
});

img6.addEventListener('click', function(e) {
    console.log("clicked 6")
    if(img6clicked !== true){
        img6clicked = true;
        img6.style = ""
    }
    else {
        img6clicked = false;
        img6.style = "--clip-start: ellipse(0 0 at 0 100%);--clip-end: ellipse(150% 150% at 0 100%);"
    }
    unlock();
});

img7.addEventListener('click', function(e) {
    console.log("clicked 7")
    if(img7clicked !== true){
        img7clicked = true;
        img7.style = ""
    }
    else {
        img7clicked = false;
        img7.style = "--clip-start: inset(0 0 100% 0); --clip-end: inset(0 0 0 0)"
    }
    unlock();
});
img8.addEventListener('click', function(e) {
    console.log("clicked 8")
    if(img8clicked !== true){
        img8clicked = true;
        img8.style = ""
    }
    else {
        img8clicked = false;
        img8.style = "--clip-start: ellipse(0 0 at 100% 100%);--clip-end: ellipse(150% 150% at 100% 100%);"
    }
    unlock();
});




function selectImg(){


}
