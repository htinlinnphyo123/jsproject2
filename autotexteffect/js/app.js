const textel=document.getElementById("text");
const speedel=document.getElementById("speed")
// console.log(speedel.value);

const text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";


let idx= 1;
let speed= 1000;

function autotext(){
    // console.log("hay");
                            // Start, end
    textel.innerText=text.slice(0,idx);
    idx++;
                // function , milisecond
    setTimeout(autotext,speed);

if( idx > text.length){

    idx=1;
}


}

autotext();

speedel.addEventListener("click",()=>{

    speed=1000/speedel.value;
});