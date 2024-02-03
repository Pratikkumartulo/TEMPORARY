// let active = 1;



// const paper = document.querySelectorAll(".card");
// paper.forEach((ppr)=>{
//     let holding = false;
//     let prevmousex = 0;
//     let prevmousey = 0;
//     let mousex=0;
//     let mousey=0;
//     let velocityx=0;
//     let velocityy=0;
//     let currentposx=0;
//     let currentposy=0;

//     ppr.addEventListener("mousedown",(e)=>{
//         holding=true;
//         ppr.style.zIndex = active;
//         active+=1;
//         if(e.button===0){
//             prevmousex=mousex;
//             prevmousey=mousey;
//         }
//     });
//     document.addEventListener("mousemove",(e)=>{
//         mousex = e.clientX;
//         mousey = e.clientY;

//         velocityx=(mousex-prevmousex);
//         velocityy=(mousey-prevmousey);
//         if(holding){
//             currentposx+=velocityx;
//             currentposy+=velocityy;

//             prevmousex=mousex;
//             prevmousey=mousey;

//             ppr.style.transform = `translateX(${currentposx}px) translateY(${currentposy}px)`;
//         }
//     });
//     window.addEventListener("mouseup",(e)=>{
//         holding=false
//     })
// })
let active = 1;

const paper = document.querySelectorAll(".card");

paper.forEach((ppr) => {
    let holding = false;
    let prevmousex = 0;
    let prevmousey = 0;
    let mousex = 0;
    let mousey = 0;
    let velocityx = 0;
    let velocityy = 0;
    let currentposx = 0;
    let currentposy = 0;

    const startDragging = (e) => {
        holding = true;
        ppr.style.zIndex = active;
        active += 1;

        if (e.type === "mousedown") {
            prevmousex = e.clientX;
            prevmousey = e.clientY;
        } else if (e.type === "touchstart") {
            prevmousex = e.touches[0].clientX;
            prevmousey = e.touches[0].clientY;
        }
    };

    const drag = (e) => {
        if (holding) {
            if (e.type === "mousemove") {
                mousex = e.clientX;
                mousey = e.clientY;
            } else if (e.type === "touchmove") {
                mousex = e.touches[0].clientX;
                mousey = e.touches[0].clientY;
            }

            velocityx = mousex - prevmousex;
            velocityy = mousey - prevmousey;

            currentposx += velocityx;
            currentposy += velocityy;

            prevmousex = mousex;
            prevmousey = mousey;

            ppr.style.transform = `translateX(${currentposx}px) translateY(${currentposy}px)`;
        }
    };

    const stopDragging = () => {
        holding = false;
    };

    ppr.addEventListener("mousedown", startDragging);
    ppr.addEventListener("touchstart", startDragging);

    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);

    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
});

let no = document.querySelector(".no");
no.addEventListener("click",(e)=>{
    e.preventDefault();
    no.style.position="absolute";
    no.style.left=`${Math.floor(Math.random()*100+1)}px`
    no.style.top=`${Math.floor(Math.random()*200+1)}px`
})

function sendEmail(subject) {
    var recipient = "pratiktulo42@gmail.com";
    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject);
    window.location.href = mailtoLink;
}