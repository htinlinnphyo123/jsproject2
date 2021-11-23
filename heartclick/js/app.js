const lovemes=document.querySelector(".loveme")
const times=document.querySelector("#time");

let timeclicks=0; //for time

let clicktime=0;

lovemes.addEventListener('click',(e)=>{
    // console.log("hay");
    if(clicktime===0){
        clicktime=new Date().getTime();
    }else{

        if((new Date().getTime() -clicktime) < 1000){
        clicktime=0;
        createheart(e);
        }else {
            clicktime=new Date().getTime();
        }
    }})

const createheart=(e)=>{
    const heart=document.createElement("i");
    heart.className="fas fa-heart";

    const cx = e.clientX;
    const cy =e.clientY;

    const heartleft = e.target.offsetLeft;
    const hearttop=e.target.offsetTop;

    const xinside = cx - heartleft;
    const yinside =cy - hearttop;

    heart.style.top=yinside + "px";
    heart.style.left=xinside + "px";

    lovemes.appendChild(heart);
    times.textContent=++timeclicks;

    setTimeout(()=>heart.remove(),400);
}

