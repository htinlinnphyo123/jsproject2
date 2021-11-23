const imgcarousel = document.getElementById('img-carousel');
const imgs=document.querySelectorAll('.img-carousel img');
const leftbtn=document.getElementById('left'),
    rightbtn=document.getElementById('right');

let idx=0;
rightbtn.addEventListener('click',()=>{
    idx++;
    // console.log(idx);
    changeimage();
    resetInterval();

})

leftbtn.addEventListener('click',()=>{
    idx--;
    // console.log(idx);
    changeimage();
    resetInterval();
})

function changeimage(){

    if(idx>imgs.length-1){
        idx=0;
    }else if(idx<0){
        idx=imgs.length-1;
    }
    // console.log(idx);

    imgcarousel.style.transform=`translate(${-idx * 500}px)`;

}

let interval = setInterval(runimage,2000);

function runimage(){
    idx++;
    changeimage();
}

function resetInterval(){
    clearInterval(interval);
    interval=setInterval(runimage,2000)
}