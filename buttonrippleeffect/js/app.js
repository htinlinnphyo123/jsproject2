const buttons=document.querySelectorAll(".btn-ripple");
// console.log(btn);
const circle=document.querySelectorAll(".circle");
// console.log(circle);

buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click',function (e){
        // console.log('hay');
        const cx=e.clientX;
        const cy=e.clientY;
        // console.log(cx,cy)

        const btntop=e.target.offsetTop;
        const btnleft=e.target.offsetLeft;
        // console.log(top,left);

        const xinside = cx - btnleft;
        const yinside = cy -btntop;

        const circle=document.createElement("span");
        circle.className="circle";
        // console.log(circle);

        circle.style.top= yinside + "px";
        circle.style.left=xinside  + "px";

        e.target.appendChild(circle);

        setTimeout(()=>circle.remove(),600)


    })

})